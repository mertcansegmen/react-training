import React from "react";
import "./Todos.scss";
import AddTodo from "./AddTodo/AddTodo";
import TodoItem from "./TodoItem/TodoItem";
import TodoDetail from "../TodoDetail/TodoDetail";
import * as I from "immutable";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: I.List(),
    };
  }

  addTodo = (title) => {
    if (!title) return;

    const newTodo = I.Map({
      id: Math.random(),
      title,
      completed: false,
    });
    this.setState({ todos: this.state.todos.push(newTodo) });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.get("id", 0.0) !== id;
      }),
    });
  };

  completeTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.get("id", 0.0) === id) {
          return todo.set("completed", !todo.get("completed", false));
        }
        return todo;
      }),
    });
  };

  getTodoById = (id) => {
    return this.state.todos.find((todo) => todo.get("id", 0) === id);
  };

  render() {
    return (
      <div className="main-content__todos">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {this.state.todos.map((todo) => (
                  <TodoItem key={todo.get("id", 0.0)} todo={todo} />
                ))}
              </React.Fragment>
            )}
          />
          <Route
            path="/todos/:id"
            render={(props) => (
              <TodoDetail
                getTodoById={this.getTodoById}
                completeTodo={this.completeTodo}
                deleteTodo={this.deleteTodo}
              />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default Todos;
