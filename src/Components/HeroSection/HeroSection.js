import React, { Component } from "react";
import "./HeroSection.css";

class HeroSection extends Component {
  render() {
    return (
      <div className="slider">
        <video
          src="/Assets/Videos/blockchain.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <h1>LEARNING AWAITS</h1>
        <p>What are you waiting for?</p>
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
