import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddTodo.scss";
import * as I from "immutable";

import { withConsumer } from "../../contexts/TodoConsumer";

const AddTodo = ({ context }) => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const addTodo = (title) => {
    if (!title) return;

    const newTodo = I.Map({
      id: Math.random(),
      title,
      completed: false,
    });
    context.setTodos(context.todos.push(newTodo));
  };

  return (
    <form onSubmit={onSubmit} className="todos__add-todo-form">
      <input
        className="add-todo-form__add-todo-input"
        name="title"
        placeholder="Add Todo"
        onChange={onChange}
        value={title}
      />
      <button className="add-todo-form__add-todo-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default withConsumer(AddTodo);
