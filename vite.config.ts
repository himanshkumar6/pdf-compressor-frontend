import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import prerender from "@prerenderer/rollup-plugin";
import puppeteerRenderer from "@prerenderer/renderer-puppeteer";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      plugins: [
        prerender({
          routes: [
            "/",
            "/compress-pdf-to-200kb",
            "/split-pdf",
            "/pdf-to-jpg",
            "/remove-metadata-from-pdf",
            "/about",
            "/contact",
          ],
          renderer: new puppeteerRenderer({
            headless: true,
            renderAfterDocumentEvent: "render-event",
          }),
        }),
      ],
      output: {
        manualChunks: {
          pdfjs: ["pdfjs-dist"],
          pdflib: ["pdf-lib"],
          jszip: ["jszip"],
        },
      },
    },
  },
});
