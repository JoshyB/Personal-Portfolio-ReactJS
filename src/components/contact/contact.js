import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h1>Get in touch</h1>
        <a href="mailto:seejoshcode@gmail.com">seejoshcode@gmail.com</a>
        <a href="https://github.com/JoshyB">
          <img
            className="social__media__icon"
            src={window.location.origin + "/images/github.svg"}
            alt="Github cat icon"
          />
        </a>
      </section>
    );
  }
}

export default Contact;
