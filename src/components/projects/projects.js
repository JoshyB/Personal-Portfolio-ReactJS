import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Card from "../card/card";
import projectData from "../../project_data";
import "./projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //create an object to hold the content of my project data such as description, and tools use
      projectData: {}
    };
  }

  componentDidMount() {
    this.setState({
      //setting the state projectData using a JSON file located in the SRC folder that contains the relevant data from my project
      projectData: projectData
    });
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="section"
        className="projects__container"
        transitionName="slide-up"
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
          {/* loop over each project object in state to create card components and pass data as props to populate the info on each card*/}
          {Object.keys(this.state.projectData).map(key => (
            <Card key={key} item={key} details={this.state.projectData[key]} />
          ))}
        </ul>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Projects;
