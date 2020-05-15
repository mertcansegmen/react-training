import React from "react";
import "./Todos.scss";
import AddTodo from "./AddTodo/AddTodo";
import TodoItem from "./TodoItem/TodoItem";
import TodoDetail from "../TodoDetail/TodoDetail";
import * as I from "immutable";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { withConsumer } from "../contexts/TodoConsumer";

const Todos = ({ context }) => {
  return (
    <div className="main-content__todos">
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <AddTodo />
              {context.todos.map((todo) => (
                <TodoItem key={todo.get("id", 0.0)} todo={todo} />
              ))}
            </>
          )}
        />
        <Route path="/todos/:id" component={TodoDetail} />
      </BrowserRouter>
    </div>
  );
};

export default withConsumer(Todos);
