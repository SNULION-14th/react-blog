import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LogInProvider } from "./contexts/LogInContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LogInProvider>
      <App />
    </LogInProvider>
  </StrictMode>,
);
