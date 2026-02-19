import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import { ThemeProvider } from './context/ThemeProvider.js';
import ScrollToTop from './components/ScrollToTop.js';
import { Toaster } from 'react-hot-toast';

import './index.css';

const container = document.getElementById('root');

if (container) {
  hydrateRoot(
    container,
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}
