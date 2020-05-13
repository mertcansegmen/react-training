import React from "react";
import PropTypes from "prop-types";
import "./AddTodo.scss";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    // this.state = Map({
    //   title: "",
    // });
    this.state = {
      title: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="todos__add-todo-form">
        <input
          className="add-todo-form__add-todo-input"
          name="title"
          placeholder="Add Todo"
          onChange={this.onChange}
          value={this.state.title}
        />
        <button className="add-todo-form__add-todo-btn" type="submit">
          Add
        </button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
