import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              // this passes the data down once again to generate each project page with more detailed data; "prop drilling" weeee
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
