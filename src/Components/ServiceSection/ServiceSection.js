import React, { Component } from "react";
import { ServiceData } from "./ServiceData";
import "./ServiceSection.css";

class ServiceSection extends Component {
  render() {
    return (
      <div className="services">
        <div className="container">
          <h2>What we offer?</h2>
          <div className="row">
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              doloremque laudantium! Repellendus doloribus blanditiis dolor
              nulla cum! At dolor fugit aperiam iure? Repudiandae nihil
              laboriosam odit iste nulla nam sint!
            </h6>

            {ServiceData.map((item, index) => {
              return (
                <div className="col-md-3 text-center">
                  <div id="icon">
                    <i className={item.cName}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.data}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceSection;
