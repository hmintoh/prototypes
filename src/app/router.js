import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("../views/homepage"));
const CoffeePage = lazy(() => import("../views/coffeepage"));
const DevPage = lazy(() => import("../views/devpage"));

const Router = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/coffee" component={CoffeePage} />
          <Route exact path="/dev" component={DevPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
