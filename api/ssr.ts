import fs from "fs";
import path from "path";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fileURLToPath } from "url";
import { render } from "../dist/server/entry-server.js";

export default async function handler(req, res) {
  try {
    const url = req.url;

    const template = fs.readFileSync(
      path.resolve(process.cwd(), "dist/index.html"),
      "utf-8",
    );

    const appHtml = render(url);

    const html = template.replace("<!--ssr-outlet-->", appHtml);

    res.status(200).setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (err) {
    res.status(500).end("SSR Error");
  }
}
