import React from "react";
import PropTypes from "prop-types";
import "./SidebarButton.scss";

class SidebarButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"sidebar__item-container"}>
        <a href="#" className="item-container__item">
          <img className="logo" src={this.props.logoImg} /> {this.props.title}
        </a>
      </div>
    );
  }
}

SidebarButton.propTypes = {
  logoImg: PropTypes.string,
  title: PropTypes.string,
};

export default SidebarButton;
