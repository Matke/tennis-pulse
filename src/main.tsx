import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// components
import App from "@/App.tsx";

// main css file
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
