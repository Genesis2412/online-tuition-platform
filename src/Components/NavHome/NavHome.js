import React, { Component } from "react";
import { NavLinks } from "./NavLinks";
import "./NavHome.css";

class NavHome extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavItems">
        <div className="navbar-logo">
          <h1>
            Online Tuition<i className="fab fa-react"></i>
          </h1>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavLinks.map((item, index) => {
            return (
              <li>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavHome;
