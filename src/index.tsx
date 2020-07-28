import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import * as serviceWorker from "./serviceWorker";

import "animate.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
