import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoItem.scss";
import { withConsumer } from "../../contexts/TodoConsumer";
import { withRouter } from "react-router-dom";

const TodoItem = (props) => {
  const id = props.todo.get("id", 0.0);
  const title = props.todo.get("title", "todo title");
  const completed = props.todo.get("completed", false);

  return (
    <div
      className="todos__todo-item"
      onClick={() => props.history.push(`/todos/${id}`)}
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
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default withConsumer(withRouter(TodoItem));
