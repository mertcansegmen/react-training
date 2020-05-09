import React from "react";
import PropTypes from "prop-types";
import "./SidebarButton.css";

class SidebarButton extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.botttomDivider
            ? "sidebar__item-container--divider"
            : "sidebar__item-container--no-divider"
        }
      >
        <a href="#" className="sidebar__item">
          <img className="logo" src={this.props.logoImg} /> {this.props.title}
        </a>
      </div>
    );
  }
}

SidebarButton.propTypes = {
  logoImg: PropTypes.string,
  title: PropTypes.string,
  botttomDivider: PropTypes.bool,
};

export default SidebarButton;
