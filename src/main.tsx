// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// components
import App from "@/App.tsx";

// main css file
import "@/styles/index.css";

// context store
import { AuthProvider } from "@/store/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
