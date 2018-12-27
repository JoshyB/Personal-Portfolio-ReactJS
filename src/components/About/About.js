import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.push("/");
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
            <p>JavaScript</p>
            <p>CSS3</p>
            <p>SCSS</p>
            <p>MongoDB</p>
            <p>Node.js</p>
            <p>Mobile & Responsive Design</p>
          </div>
          <div className="tools">
            <h3>Tools & Libraries</h3>
            <p>React.js</p>
            <p>Express.js</p>
            <p>Gulp</p>
            <p>Webpack</p>
            <p>Parcel</p>
            <p>Bulma</p>
            <p>Bootstrap</p>
            <p>Sketch</p>
            <p>Affinity Photo</p>
          </div>
        </div>
        <article className="moreAbout">
          <p>
            <strong>I love web development. </strong>
            I'm Joshua Belknap, a developer living and working in Columbus,
            Ohio. I have been doing web developement for a little under 4 years.
            I typically work with HTML5, CSS3, and Javascript, but I love to
            pick up new web technologies and learn all about them. When I'm not
            slinging divs, writing code, or designing a landing page, I enjoy
            spending time with my family, cooking, and traveling.
          </p>
        </article>
      </ReactCSSTransitionGroup>
    );
  }
}

export default About;
