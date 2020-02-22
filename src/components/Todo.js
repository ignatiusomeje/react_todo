import React, { Component } from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import "./styles/Todo.css";
import { bindActionCreators } from "redux";
import { FetchAllTodos, IsDoneTodo, ClearTodo } from "./../actions/TodoActions";
import { Payments } from "./../actions/userActions";
import { connect } from "react-redux";

class Todo extends Component {
  componentDidMount() {
    this.props.Payments(this.props.token);
    this.props.ClearTodo();
    this.props.FetchAllTodos(this.props.token);
  }
  componentDidUpdate() {
    this.props.Payments(this.props.token);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Todo_wrapper">
          <div>
            <h1> Your Saved Todos</h1>
            <div className="loading">
              {this.props.isLoading && (
                <img src="images/spinner.gif" alt="Loading GIF" />
              )}
            </div>
            {!this.props.isLoading && this.props.todos.length < 1 ? (
              <p>Sorry, you don't have any todo, so do create one</p>
            ) : (
              this.props.todos.map((todo, index) => {
                return <TodoItem key={todo._id} todo={todo} />;
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { FetchAllTodos, IsDoneTodo, ClearTodo, Payments },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    todos: state.Todos.todo,
    token: state.User.user.token.token,
    isLoading: state.Todos.isLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
