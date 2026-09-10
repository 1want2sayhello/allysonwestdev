import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop.jsx";
import ScrollToHash from "./components/scroll/ScrollToHash";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <ScrollToHash>
          <App />
        </ScrollToHash>
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>,
);
