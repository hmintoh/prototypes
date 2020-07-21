import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../views/home"));
const Coffee = lazy(() => import("../views/coffee"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/coffee" component={Coffee} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
