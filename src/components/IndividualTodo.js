import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import {
  DeleteTodo,
  ViewTodo_IsDone,
  FetchOneTodo
} from "./../actions/TodoActions";
import "./styles/IndividualTodo.css";
import { connect } from "react-redux";

class IndividualTodo extends Component {
  HandleDeleteBtn = e => {
    this.props.DeleteTodo(this.props.todo._id, this.props.token);
    e.stopPropagation();
    this.props.history.push("/todos");
  };
  HandleDoneBtn = () => {
    this.props.ViewTodo_IsDone(this.props.todo, this.props.token);
  };
  HandleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.push("/todos");
  };
  componentDidMount() {
    this.props.FetchOneTodo(this.props.match.params.id, this.props.token);
  }
  render() {
    return (
      <div className="Individual_modal">
        <div className="Individual_modalContent todo_wrappers">
          <button className="closes" onClick={this.HandleOnClick}>
            X
          </button>
          <div className="left_sides">
            <p className={this.props.todo.isDone ? "done" : "not_done"}>
              {this.props.todo.isDone
                ? `Todo Done ${
                    this.props.todo.isDone
                      ? this.props.todo.durationDoneAt
                      : null
                  }`
                : "Todo in Progress"}
            </p>
            <p>
              Created: <br />
              {this.props.todo.durationCreatedAt}
            </p>
          </div>
          <div className="right_side">
            <p className="todo_buttons">
              <button onClick={this.HandleDeleteBtn}>Delete</button>
              {this.props.todo.isDone ? null : (
                <button onClick={this.HandleDoneBtn}>Done</button>
              )}
              <button className="close_btn" onClick={this.HandleOnClick}>
                {" "}
                Close
              </button>
            </p>
            <p className="todo_activity">
              {this.props.todo.activity}
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.Todos.viewedTodo,
    token: state.User.user.token.token
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      DeleteTodo,
      ViewTodo_IsDone,
      FetchOneTodo
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IndividualTodo)
);
