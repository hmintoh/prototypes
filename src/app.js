import React, { Component } from "react";
import Route from "./router";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route />
      </div>
    );
  }
}

export default App;
