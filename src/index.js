import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>
);
