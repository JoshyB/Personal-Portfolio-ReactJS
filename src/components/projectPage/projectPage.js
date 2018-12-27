import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./projectPage.css";
import projectData from "../../project_data";

class projectPage extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      projectData: {}
    };
  }

  componentDidMount() {
    const { projectName } = this.props.match.params;
    this.setState({
      projectData: projectData[projectName]
    });
  }

  goBack() {
    this.props.history.push("/");
  }

  render() {
    const { name, tools, about, images } = this.state.projectData;

    return (
      <ReactCSSTransitionGroup
        component="section"
        className="projectPage"
        transitionName="slide-up"
        transitionAppear={true}
        transitionAppearTimeout={350}
        transitionEnter={true}
        transitionEnterTimeout={350}
        transitionLeave={true}
        transitionLeaveTimeout={350}
      >
        <div className="project__page__container">
          <button onClick={this.goBack}>⬅ Go Back</button>
          <article className="project__page__body">
            <div className="image">
              <img
                src={images ? window.location.origin + images[0] : ""}
                alt=""
              />
            </div>
            <div className="project__text">
              <div className="tools__used">
                <p>{tools}</p>
              </div>
              <div className="project__title">
                <h1>{name}</h1>
              </div>
              <div className="about__project">
                <p>{about}</p>
              </div>
            </div>
          </article>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default projectPage;
