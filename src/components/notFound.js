import React, { Component } from "react";
import "./notFound.css";

class notFound extends Component {
  render() {
    return (
      <section className="pageNotFound">
        <h1>404</h1>
        <h3>Sorry, that page doesnt exist</h3>
        <a href="/">Home Page ➞</a>
      </section>
    );
  }
}

export default notFound;
