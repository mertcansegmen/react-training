import React from "react";
import PropTypes from "prop-types";
import "./Content.css";
import AddTodo from "../AddTodo/AddTodo";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <AddTodo />

        <div className="fake-content">Buy pasta</div>
        <div className="fake-content">Fix laptop</div>
        <div className="fake-content">Do the homework</div>
        <div className="fake-content">Wash dishes</div>
      </div>
    );
  }
}

export default Content;
