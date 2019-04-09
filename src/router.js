import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Coffee from "./views/coffee";
import Blooms from "./views/blooms";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/coffee" component={Coffee} />
        <Route exact path="/blooms" component={Blooms} />
      </Switch>
    </Router>
  );
};

export default Routes;
