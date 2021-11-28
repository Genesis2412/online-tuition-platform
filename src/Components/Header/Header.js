import React, { Component } from "react";
import { NavLinks } from "./HeaderLinks";
import "./Header.css";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand text-info" href="#">
            Online Tuition
          </a>
          <button
            className="navbar-toggler border border-info text-info"
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            {this.state.show ? (
              <i className="fa fa-bars" />
            ) : (
              <i className="fa fa-times" />
            )}
          </button>
          <div
            className={
              this.state.show
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse active"
            }
          >
            <ul className="navbar-nav ms-auto">
              {NavLinks.map((item, index) => {
                return (
                  <li className="nav-item">
                    <a href={item.url} className={item.cName}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
