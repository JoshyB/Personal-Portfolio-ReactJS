import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./components/notFound";
import About from "./About";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
