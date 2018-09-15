import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./card.css";

class Card extends Component {
  render() {
    const { name, description, tools } = this.props.details;
    return (
      <li>
        <Link
          to={{
            pathname: `/projects/${this.props.item}`,
            state: {
              projectInfo: this.props.details
            }
          }}
          className="card"
        >
          <div className="title">
            <h1>{name}</h1>
          </div>
          <div className="description">{description}</div>
          <div className="tooling">{tools}</div>
        </Link>
      </li>
    );
  }
}

export default Card;
