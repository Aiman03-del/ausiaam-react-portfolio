import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";

export default class All extends Component {
  render() {
    return (
      <div>
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    );
  }
}
