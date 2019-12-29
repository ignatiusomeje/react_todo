import React, { Component } from "react";
import "./styles/CreateTodo.css";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }
  HandleInputChanges = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    this.setState(() => ({
      [targetName]: targetValue
    }));
  };
  HandleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="CreateTodo_modal">
        <div className="CreateTodo_modalContent">
          <button className="close">X</button>
          <h1>What's your new Todo?</h1>
          <form onSubmit={this.HandleSubmit}>
            <div>
              <label>Your Todo</label>
              <input
                name="todo"
                value={this.state.todo}
                onChange={this.HandleInputChanges}
                placeholder="New Todo"
              />
            </div>
            <button>Create Todo</button>
          </form>
        </div>
      </div>
    );
  }
}
