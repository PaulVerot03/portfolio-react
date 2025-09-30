import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App/App.tsx";
import { BrowserRouter } from "react-router-dom";
import './style/styles.css'           // ← Import global CSS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
