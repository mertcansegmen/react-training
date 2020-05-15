import React from "react";
import PropTypes from "prop-types";
import "./SidebarButton.scss";

const SidebarButton = (props) => {
  return (
    <div className={"sidebar__item-container"}>
      <a href="#" className="item-container__item">
        <img className="logo" src={props.logoImg} /> {props.title}
      </a>
    </div>
  );
};

SidebarButton.propTypes = {
  logoImg: PropTypes.string,
  title: PropTypes.string,
};

export default SidebarButton;
