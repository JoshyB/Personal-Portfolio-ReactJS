import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Card from "../card/card";
import projectData from "../../project_data";
import "./projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: {}
    };
  }
  componentDidMount() {
    this.setState({
      projectData: projectData
    });
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="section"
        className="projects__container"
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnter={true}
        transitionEnterTimeout={300}
        transitionLeave={true}
        transitionLeaveTimeout={300}
      >
        <div className="projects__header__text">
          <h1>Recent Projects</h1>
        </div>
        <ul className="project__list">
          {Object.keys(this.state.projectData).map(key => (
            <Card key={key} item={key} details={this.state.projectData[key]} />
          ))}
        </ul>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Projects;
