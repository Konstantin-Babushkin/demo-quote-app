import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { quotes } from "./quotes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App allQuotes={quotes} />
  </React.StrictMode>
);
