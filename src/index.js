import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import ReduxStore from "./services/ReduxStore";
import { HelmetProvider } from "react-helmet-async";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={ReduxStore}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ReduxProvider>
  </React.StrictMode>
);
