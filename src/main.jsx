import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CoinDataProvider } from "./config/CoinDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoinDataProvider>
      <App />
    </CoinDataProvider>
  </React.StrictMode>
);
