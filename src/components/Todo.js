import React, { Component } from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import "./styles/Todo.css";
import { bindActionCreators } from "redux";
import { FetchAllTodos, IsDoneTodo, ClearTodo } from "./../actions/TodoActions";
import { connect } from "react-redux";

class Todo extends Component {
  componentDidMount() {
    this.props.FetchAllTodos(this.props.token);
  }
  componentWillUnmount() {
    this.props.ClearTodo();
  }
  render() {
    return (
      <div>
        <Header />
        <div className="Todo_wrapper">
          <div>
            <h1> Your Saved Todos</h1>
            {this.props.todos.length < 1 ? (
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
  return bindActionCreators({ FetchAllTodos, IsDoneTodo, ClearTodo }, dispatch);
};

const mapStateToProps = state => {
  return {
    todos: state.Todos.todo,
    token: state.User.user.token.token
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
