import React from "react";
import "./Todos.scss";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import { Map, List } from "immutable";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: List(),
    };
  }

  addTodo = (title) => {
    if (!title) return;

    const newTodo = Map({
      id: Math.random(),
      title,
      completed: false,
    });
    this.setState({ todos: this.state.todos.push(newTodo) });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.get("id") !== id;
      }),
    });
  };

  completeTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.get("id") === id) {
          return todo.set("completed", !todo.get("completed"));
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="main-content__todos">
        <AddTodo addTodo={this.addTodo} />

        {this.state.todos.map((todo) => (
          <TodoItem
            key={todo.get("id")}
            todo={todo}
            completeTodo={this.completeTodo}
            deleteTodo={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default Todos;
