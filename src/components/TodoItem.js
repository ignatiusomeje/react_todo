import React, { Component } from "react";
import "./styles/TodoItem.css";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  DeleteTodo,
  IsDoneTodo,
  FetchAllTodos
} from "./../actions/TodoActions";

class TodoItem extends Component {
  HandleDeleteBtn = () => {
    this.props.DeleteTodo(this.props.todo._id, this.props.token);
  };
  HandleDoneBtn = () => {
    this.props.IsDoneTodo(this.props.todo, this.props.token);
  };
  render() {
    return (
      <div className="todos_wrapper">
        <div className="left_side">
          <p className={this.props.todo.isDone ? "done" : "not_done"}>
            {this.props.todo.isDone
              ? `Todo Done ${
                  this.props.todo.isDone ? this.props.todo.durationDoneAt : null
                }`
              : "Todo in Progress"}
          </p>
          <p>
            Created: <br />
            {this.props.todo.durationCreatedAt}
            <br />
            <Link
              to={{
                pathname: `/todo/${this.props.todo._id}`,
                state: { background: this.props.location }
              }}
            >
              <button>View Todo</button>
            </Link>
          </p>
        </div>
        <div className="right_side">
          <p className="todo_buttons">
            <button
              // className="deleteEdit"
              onClick={this.HandleDeleteBtn}
            >
              Delete
            </button>
            {this.props.todo.isDone ? null : (
              <button onClick={this.HandleDoneBtn}>Done</button>
            )}

            <Link
              to={{
                pathname: `/todo/edit/${this.props.todo._id}`,
                state: { background: this.props.location }
              }}
            >
              <button
              // className="deleteEdit"
              >
                Edit
              </button>
            </Link>
          </p>
          <p className="todo_activities">{this.props.todo.activity}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      DeleteTodo,
      IsDoneTodo,
      FetchAllTodos
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    token: state.User.user.token.token
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoItem)
);
