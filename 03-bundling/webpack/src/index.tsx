import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import logo from "./logo.png";

const App: React.FC = () => {
  return (
    <div>
      <div className="logo-container">
        <img src={logo} alt="Lemoncode Logo" />
      </div>
      <h1 className="title">
        Hola Mundo desde <span>React</span>
      </h1>
      <div style={{ textAlign: "center" }}>
        <p>Entorno: {process.env.ENV_NAME}</p>
        <p>API: {process.env.API_URL}</p>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
