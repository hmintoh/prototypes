import React, { Component } from "react";
import Route from "./router";
import Footer from "./components/footer/footer";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route />
        <Footer />
      </div>
    );
  }
}

export default App;
