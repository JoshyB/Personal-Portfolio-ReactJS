import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h3>Get in touch</h3>
        <div className="row__container">
          <a href="https://www.github.com/joshyb">GitHub</a>
          <a href="mailto:seejoshcode@gmail.com">Email</a>
        </div>
      </section>
    );
  }
}

export default Contact;
