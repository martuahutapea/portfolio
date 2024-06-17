import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const base = process.env.NODE_ENV === "development" ? "/" : "/portfolio/";

root.render(
  <React.StrictMode>
    <Router basename={base}>
      <App />
    </Router>
  </React.StrictMode>
);
