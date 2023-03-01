import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthSetting } from "./contexts/Auth/AuthSetting";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthSetting>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthSetting>
  </React.StrictMode>,
  document.getElementById("root")
);