import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { CreatesTodo } from "./../actions/TodoActions";
import "./styles/CreateTodo.css";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { activity: "" },
      token: this.props.token,
      error: null
    };
  }
  HandleInputChanges = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    this.setState(() => ({
      todo: {
        [targetName]: targetValue
      }
    }));
  };
  HandleSubmit = e => {
    e.preventDefault();
    if (this.state.todo.activity.trim() === "") {
      return this.setState(() => ({
        error: "No new Activity given"
      }));
    } else if (this.state.todo.activity.trim().length < 6) {
      return this.setState(() => ({
        error: `Minimum length required is 6 Characters while your new Activity has ${
          this.state.todo.activity.trim().length
        } characters`
      }));
    } else {
      this.props.CreatesTodo(this.state.todo, this.state.token);
      e.stopPropagation();
      this.props.history.push("/todos");
    }
  };
  HandleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.push("/todos");
  };
  render() {
    return (
      <div className="CreateTodo_modal">
        <div className="CreateTodo_modalContent">
          <button className="Create_todo_close" onClick={this.HandleOnClick}>
            X
          </button>
          <h1>New Activity?</h1>
          <form onSubmit={this.HandleSubmit}>
            <div>
              <label htmlFor="create-todo" className="show_hide">
                New Activity
              </label>
              <input
                name="activity"
                value={this.state.todo.activity}
                onChange={this.HandleInputChanges}
                placeholder="New Todo"
              />
            </div>
            <button type="submit">Create Activity</button>
            {(this.state.error || this.props.createError) && (
              <p className="signup_error">
                {this.state.error || this.props.createError}
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ CreatesTodo }, dispatch);
}

const mapStateToProps = state => {
  return {
    createError: state.Todos.todoError,
    token: state.User.user.token.token
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateTodo)
);
