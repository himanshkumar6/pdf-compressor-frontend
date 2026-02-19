import fs from "fs";
import path from "path";
import express from "express";
import { Writable } from "stream";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  // ✅ CREATE EXPRESS APP
  const app = express();

  // ✅ CREATE VITE SERVER
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  // ✅ SSR ROUTE HANDLER
  // ✅ SSR ROUTE HANDLER
  app.use(async (req, res) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );

      template = await vite.transformIndexHtml(url, template);

      const mod = await vite.ssrLoadModule("/src/entry-server.tsx");

      const [htmlStart, htmlEnd] = template.split("<!--ssr-outlet-->");

      let didError = false;

      const stream = mod.render(url, {
        onAllReady() {
          if (res.headersSent) return;

          res.statusCode = didError ? 500 : 200;
          res.setHeader("Content-Type", "text/html");

          res.write(htmlStart);

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
        onError(err) {
          didError = true;
          console.error(err);
        }
      });

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
