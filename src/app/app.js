import React, { Component } from "react";
import Router from "./router";
import Footer from "../components/footer/footer";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
