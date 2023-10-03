import React from "react";
import ReactDOM from "react-dom/client";
import "./common/styles/index.css";
import { App } from "./components/pages/App";
// import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <React.Fragment>
      <CssBaseline /> */}
    <App />
    {/* </React.Fragment> */}
  </React.StrictMode>
);
