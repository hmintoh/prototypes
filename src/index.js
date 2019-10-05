import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import "./index.scss";
import App from "./app.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
