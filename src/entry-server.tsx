import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { Toaster } from "react-hot-toast";

/**
 * Modern React 18 Streaming SSR Entry
 * @param {string} url
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} options
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function render(url: string, options: any) {
  return renderToPipeableStream(
    <ThemeProvider>
      <StaticRouter location={url}>
        <ScrollToTop />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#1f2937",
              color: "#fff",
              borderRadius: "1rem",
              border: "1px solid #374151",
            },
          }}
        />
        <App />
      </StaticRouter>
    </ThemeProvider>,
    options
  );
}
