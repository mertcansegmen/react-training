import React from "react";
import PropTypes from "prop-types";
import "./AddTodo.css";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);

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
      <form onSubmit={this.onSubmit} className="search-form">
        <input
          className="search-form__search-input"
          name="title"
          placeholder="Add Todo"
          onChange={this.onChange}
          value={this.state.title}
        />
        <button className="search-form__search-btn" type="submit">
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
