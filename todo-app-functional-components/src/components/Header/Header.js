import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__title">TODO App</h2>
      <div className="header__button-container">
        <a href="#" className="button-container__button">
          {"Homepage"}
        </a>
        <a href="#" className="button-container__button">
          {"About Us"}
        </a>
        <a href="#" className="button-container__button">
          {"Contact"}
        </a>
      </div>
    </div>
  );
};

export default Header;
