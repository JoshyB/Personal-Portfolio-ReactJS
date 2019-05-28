import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { unregister } from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "./polyfill";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

unregister();
