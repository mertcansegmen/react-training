import React from "react";
import PropTypes from "prop-types";
import "./TodoDetail.scss";
import * as I from "immutable";
import { withRouter } from "react-router-dom";
import { withConsumer } from "../contexts/TodoConsumer";

const TodoDetail = ({ match, params, context, history }) => {
  const deleteTodo = (id) => {
    context.setTodos(
      context.todos.filter((todo) => {
        return todo.get("id", 0.0) + "" !== id;
      })
    );
    history.goBack();
  };

  const completeTodo = (id) => {
    context.setTodos(
      context.todos.map((todo) => {
        if (todo.get("id", 0.0) + "" === id) {
          return todo.set("completed", !todo.get("completed", false));
        }
        return todo;
      })
    );
    history.goBack();
  };

  const getTodoById = (id) => {
    return context.todos.find((todo) => {
      return todo.get("id", 0) + "" === id + "";
    });
  };

  const todo =
    getTodoById(match.params.id) ||
    I.Map({ title: "todo not found", completed: false });

  return (
    <div className="main-content__todo-detail">
      <h3>{todo.get("title", "todo title")}</h3>

      <div className="todo-detail__buttons">
        {/* Complete Button */}
        <button
          className="btn btn-warning buttons_complete-btn"
          type="submit"
          onClick={() => completeTodo(match.params.id)}
        >
          {todo.get("completed", false)
            ? "MARK AS UNCOMPLETED"
            : "MARK AS COMPLETED"}
        </button>

        {/* Delete Button */}
        <button
          className="btn btn-error buttons_delete-btn"
          type="submit"
          onClick={() => deleteTodo(match.params.id)}
        >
          {"DELETE TODO"}
        </button>
      </div>
    </div>
  );
};
export default withRouter(withConsumer(TodoDetail));
