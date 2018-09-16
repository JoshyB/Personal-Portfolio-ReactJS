import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        component="article"
        className="about"
        transitionName="slide-up"
        transitionAppear={true}
        transitionAppearTimeout={400}
        transitionEnter={true}
        transitionEnterTimeout={400}
        transitionLeave={true}
        transitionLeaveTimeout={400}
      >
        <button onClick={this.goBack}>⬅ Go Back</button>

        <div className="topTitle">
          <h1>About Me, Skills and Interest</h1>
        </div>
        <div className="skills">
          <div className="languages">
            <h3>Core Skills</h3>
            <p>HTML5</p>
            <p>Javascript</p>
            <p>CSS3</p>
            <p>SCSS</p>
            <p>Node.js</p>
            <p>Mobile & Responsive Design</p>
            <p>PHP</p>
          </div>
          <div className="tools">
            <h3>Tools & Libraries</h3>
            <p>React.js</p>
            <p>Express.js</p>
            <p>Gulp</p>
            <p>Webpack</p>
            <p>Bulma</p>
            <p>Bootstrap</p>
            <p>Sketch</p>
            <p>Affinity Photo</p>
          </div>
        </div>
        <section className="moreAbout">
          <p>
            <strong>I love web development; </strong>
            I'm Joshua Belknap, a developer living and working in Columbus,
            Ohio. I have been doing web developement for just a little under 4
            years. I love to learn, and create things on the web. When I'm not
            slinging divs, writing code, or designing a landing page, you can
            usually find me hanging out with my awesome 2 year old daughter and
            beautiful wife.{" "}
          </p>
        </section>
        <button onClick={this.goBack}>⬅ Go Back</button>
      </ReactCSSTransitionGroup>
    );
  }
}

export default About;
