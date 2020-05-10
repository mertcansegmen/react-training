import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoItem.scss";
import { Map, List } from "immutable";

export class TodoItem extends Component {
  render() {
    const id = this.props.todo.get("id");
    const title = this.props.todo.get("title");
    const completed = this.props.todo.get("completed");
    // const { id, title, completed } = this.props.todo;

    return (
      <div
        className="todos__todo-item"
        onClick={this.props.completeTodo.bind(this, id)}
        onDoubleClick={this.props.deleteTodo.bind(this, id)}
      >
        <span
          className={
            completed
              ? "todo-item__todo-title--completed"
              : "todo-item__todo-title--active"
          }
        >
          {title}
        </span>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
