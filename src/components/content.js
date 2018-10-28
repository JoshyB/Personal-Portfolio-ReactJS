import React from "react";
import { Route, Switch } from "react-router-dom";
import Projects from "./projects/projects";
import ProjectPage from "./projectPage/projectPage";
import NotFound from "./notFound";
import About from "./About/About";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/projects/:projectName" component={ProjectPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Content;
