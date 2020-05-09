import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2 className="header__title">TODO App</h2>
        <div className="header__button-container">
          <a href="#" className="header__button">
            Homepage
          </a>
          <a href="#" className="header__button">
            About Us
          </a>
          <a href="#" className="header__button">
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
