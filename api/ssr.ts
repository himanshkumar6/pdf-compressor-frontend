import fs from "fs";
import path from "path";
import { Writable } from "stream";
import { render } from "../src/entry-server.js";

export default async function handler(req: any, res: any) {
  try {
    const url = req.url || "/";

    // 1. Read the production template (Vercel deployment: dist/index.html)
    const templatePath = path.resolve(process.cwd(), "dist/index.html");
    if (!fs.existsSync(templatePath)) {
       throw new Error(`Template not found at ${templatePath}. Ensure 'vite build' has run.`);
    }
    const template = fs.readFileSync(templatePath, "utf-8");

    // 2. Split template at the outlet
    const [htmlStart, htmlEnd] = template.split("<!--ssr-outlet-->");

    let didError = false;

    // 3. Start React Streaming
    const stream = render(url, {
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
      onShellError(err: any) {
        console.error("Vercel SSR Shell Error:", err);
        if (!res.headersSent) {
          res.statusCode = 500;
          res.send("<!doctype html><h1>Internal Server Error</h1>");
        }
      },
      onError(err: any) {
        didError = true;
        console.error("Vercel SSR Stream Error:", err);
      },
    });

    // 4. Force abort on timeout
    setTimeout(() => stream.abort(), 10000);

  } catch (err: any) {
    console.error("Vercel Global SSR Error:", err);
    if (!res.headersSent) {
      res.status(500).end("SSR Configuration Error: " + err.message);
    }
  }
}
