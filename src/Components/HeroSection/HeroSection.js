import React, { Component } from "react";
import Typed from "react-typed";
import "./HeroSection.css";

class HeroSection extends Component {
  render() {
    return (
      <div className="slider">
        {/* <video
          src="/Assets/Videos/blockchain.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        /> */}
        <h1>
          <Typed
            className="typed-text"
            strings={["LEARNING AWAITS", "FOR GRADE 7 TO 13"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h1>

        <p>Tutors and students what are you waiting for?</p>
        <div className="slider-links">
          <a href="#" className="get-started">
            Get Started
          </a>
          <a href="#" className="view-demo">
            View Demo <i className="fa fa-play-circle"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default HeroSection;
