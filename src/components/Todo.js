import React, { Component } from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import "./styles/Todo.css";
import data from "./data";
import { bindActionCreators } from "redux";
import { FetchAllTodos, IsDoneTodo } from "./../actions/TodoActions";
import { connect } from "react-redux";

class Todo extends Component {
  componentDidMount() {
    this.props.FetchAllTodos();
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
  return bindActionCreators({ FetchAllTodos, IsDoneTodo }, dispatch);
};

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.Todos.todo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
