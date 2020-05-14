import React from "react";
import PropTypes from "prop-types";
import "./TodoDetail.scss";
import * as I from "immutable";
import { withRouter } from "react-router-dom";

class TodoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todo =
      this.props.getTodoById(this.props.match.params.id) ||
      I.Map({ title: "todo not found", completed: false });

    return (
      <div className="main-content__todo-detail">
        <h3>{todo.get("title", "todo title")}</h3>

        <div className="todo-detail__buttons">
          <button
            className="btn btn-warning"
            type="submit"
            onClick={() => {
              this.props.completeTodo(this.props.match.params.id);
              this.props.history.goBack();
            }}
          >
            {todo.completed ? "Activate" : "Complete"}
          </button>
          <button
            className="btn btn-error"
            type="submit"
            onClick={() => {
              this.props.deleteTodo(this.props.match.params.id);
              this.props.history.goBack();
            }}
          >
            {"Delete"}
          </button>
        </div>
      </div>
    );
  }
}

TodoDetail.propTypes = {
  getTodoById: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default withRouter(TodoDetail);
