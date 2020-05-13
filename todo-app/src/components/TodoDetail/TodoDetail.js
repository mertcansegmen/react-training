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
    console.log(this.props);
    return (
      <div className="main-content__todo-detail">
        {/* {JSON.stringify(this.props)} */}
        <h3>{this.props.getTodoById(this.props.match.params.id)}</h3>

        <div className="todo-detail__buttons">
          <button
            className="btn btn-warning"
            type="submit"
            onClick={() => this.props.completeTodo(this.props.match.params.id)}
          >
            Complete
          </button>
          <button
            className="btn btn-error"
            type="submit"
            onClick={() => this.props.deleteTodo(this.props.match.params.id)}
          >
            Delete
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
