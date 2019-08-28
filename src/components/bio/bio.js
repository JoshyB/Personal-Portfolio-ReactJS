import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./bio.css";

class Bio extends Component {
  render() {
    return (
      <section className="bio">
        <div className="name">
          <Link to="/">
            <img
              src={window.location.origin + "/images/joshua.jpg"}
              alt="Joshua's portrait"
            />
          </Link>
          <h1>Joshua Belknap</h1>
        </div>
        <p>
          {/* the curly brackets after "from" are just to add a space between "from" and the "Columbus, Ohio" link */}
          👋 I’m a versatile Web developer from{" "}
          <a href="https://www.google.com/maps/place/Columbus,+OH/@39.9829514,-82.990829,11z/data=!4m2!3m1!1s0x883889c1b990de71:0xe43266f8cfb1b533">
            Columbus, Ohio
          </a>{" "}
          where I create awesome websites and web applications for fun, and
          profit
        </p>
        <div className="aboutme">
          <Link to={window.location.href.includes("about") ? "/" : "/about"}>
            {window.location.href.includes("about")
              ? "← Portfolio"
              : "More about me ➞"}
          </Link>
        </div>
      </section>
    );
  }
}

export default Bio;
