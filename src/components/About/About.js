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
        <article className="moreAbout">
          <p>
            <strong>I love web development; </strong>
            I'm Joshua Belknap, a developer living and working in Columbus,
            Ohio. I have been doing web developement for just a little over 3
            years. I love to learn, and create things on the web. When I'm not
            slinging divs, writing code, or designing a landing page, I'm
            usually spending time with my lovely two-year old daughter and
            beautiful wife Bailey. We love to travel, cook, and spend as much
            time as we can outside hiking, fishing or just exploring various
            little pockets of Columbus, Ohio and neghboring areas.
          </p>
        </article>
        <button onClick={this.goBack}>⬅ Go Back</button>
      </ReactCSSTransitionGroup>
    );
  }
}

export default About;
