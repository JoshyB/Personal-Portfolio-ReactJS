import React, { Component } from "react";
import Bio from "./components/bio/bio";
import Contact from "./components/contact/contact";
import Content from "./components/content";
import Footer from "./components/footer/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="developer__bio">
          <Bio />
        </section>
        <section className="contact__info">
          <Contact />
        </section>
        <section className="projects">
          <Content />
        </section>
      </div>
    );
  }
}

export default App;
