import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import app from "./app";

ReactDom.render(
    <React.StrictMode>
        <app />
    </React.StrictMode>,
    document.getElementById("root")
)