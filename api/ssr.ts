import fs from "fs";
import path from "path";
import { render } from "../src/entry-server";

export default async function handler(req, res) {
  try {
    const url = req.url;

    const template = fs.readFileSync(
      path.resolve(process.cwd(), "dist/index.html"),
      "utf-8",
    );

    const appHtml = await render(url);

    const html = template.replace("<!--ssr-outlet-->", appHtml);

    res.setHeader("Content-Type", "text/html");
    res.status(200).end(html);
  } catch (err) {
    console.error(err);
    res.status(500).end("SSR Error");
  }
}
