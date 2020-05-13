import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoItem.scss";
import { withRouter } from "react-router-dom";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const id = this.props.todo.get("id", 0.0);
    const title = this.props.todo.get("title", "todo title");
    const completed = this.props.todo.get("completed", false);
    console.log(this.props);

    return (
      <div
        className="todos__todo-item"
        // onClick={() => this.props.completeTodo(id)}
        onClick={() => this.props.history.push(`/todos/${id}`)}
        onDoubleClick={() => this.props.deleteTodo(id)}
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
};

export default withRouter(TodoItem);
