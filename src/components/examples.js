import React, { Component } from "react";
import styled from "styled-components";
import examples from "../examples_data";

const ExamplesWrap = styled.section`
  width: 75%;
  margin: 0 auto;
  margin: 30px auto;

  .examples {
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    .example_card {
      width: 100%;
      height: 600px;
      min-width: 250px;
      margin-bottom: 30px;
      border-radius: 0.2rem;
      grid-column: auto;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);
      border: 1px solid #f2c215;
      background: #6e2493;

      &:nth-child(even) {
        justify-self: flex-end;
      }

      a {
        display: inline-block;
        width: 80px;
        height: 40px;
        color: white;
        border-radius: 0.2rem;
        border: 1px solid #f2c215;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);
        margin: 12px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        left: 10px;

        &:hover,
        &:focus {
          border: 2px solid #f2c215;
          transform: scale(1.1);
        }
      }

      img {
        width: 100%;
      }

      .card_header_text h5 {
        margin: 0.75rem;
      }

      .card_body_text {
        p {
          color: white;
          margin: 0.75rem;
        }
      }

      /* href link with the example card */
      .card_button {
        width: 80px;
        padding: 5px;

        img {
          width: 30%;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 90%;

    .examples_header_text {
      text-align: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .examples {
      display: grid;
      grid-template-columns: repeat(auto-fill, 340px);
      justify-content: center;

      .example_card {
        width: 100%;
      }
    }
  }
`;

class Examples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      examples: examples
    };
  }

  render() {
    return (
      <ExamplesWrap>
        <div className="examples_header_text">
          <h2>Other Examples</h2>
        </div>
        <div className="examples">
          {Object.keys(this.state.examples).map(key => (
            <div className="example_card" key={key}>
              <img
                src={
                  this.state.examples[key].image
                    ? window.location.origin + this.state.examples[key].image
                    : null
                }
                alt=""
              />
              <div className="card_header_text">
                <h5>{this.state.examples[key].name}</h5>
              </div>
              <div className="card_body_text">
                <p>{this.state.examples[key].description}</p>
              </div>
              <a className="card_button" href={this.state.examples[key].url}>
                <img
                  src={window.location.origin + "/images/link_symbol.svg"}
                  aria-label="Link to website demo page"
                />
              </a>
            </div>
          ))}
        </div>
      </ExamplesWrap>
    );
  }
}

export default Examples;
