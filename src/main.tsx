import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Belajar from "./Belajar.tsx";
// file entrypoint pertama kali diakses!

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Belajar />
    <App />
  </StrictMode>
);
