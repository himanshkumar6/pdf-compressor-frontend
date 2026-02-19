import fs from "fs";
import path from "path";
import express from "express";
import { Writable } from "stream";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  // SSR Handler
  app.use(async (req, res) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html and apply Vite transforms
      let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);

      // 2. Load the server entry module
      const mod = await vite.ssrLoadModule("/src/entry-server.tsx");

      // 3. Split template at the outlet
      const [htmlStart, htmlEnd] = template.split("<!--ssr-outlet-->");

      let didError = false;

      // 4. Start Streaming (Waiting for all lazy routes for SEO/onAllReady)
      const stream = mod.render(url, {
        onAllReady() {
          if (res.headersSent) return;

          res.statusCode = didError ? 500 : 200;
          res.setHeader("Content-Type", "text/html");

          // Write starting HTML
          res.write(htmlStart);

          // Wrap response to inject footer at the end
          const writable = new Writable({
            write(chunk, encoding, cb) {
              res.write(chunk, encoding);
              cb();
            },
            final(cb) {
              res.write(htmlEnd);
              res.end();
              cb();
            },
          });

          stream.pipe(writable);
        },
        onShellError(err) {
          console.error("Shell Error:", err);
          res.statusCode = 500;
          res.send("<!doctype html><h1>Internal Server Error</h1>");
        },
        onError(err) {
          didError = true;
          console.error("Stream Error:", err);
        }
      });

      // 5. Abort rendering if it takes too long
      setTimeout(() => stream.abort(), 10000);

    } catch (e) {
      vite.ssrFixStacktrace(e);
      if (!res.headersSent) {
        res.status(500).end(e.stack);
      }
    }
  });

  const PORT = 5173;
  app.listen(PORT, () => {
    console.log(`🚀 SSR running at http://localhost:${PORT}`);
  });
}

createServer();
