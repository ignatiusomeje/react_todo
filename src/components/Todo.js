import React, { Component } from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import "./styles/Todo.css";
import data from "./data";
export default class Todo extends Component {
  render() {
    {
      console.log(data);
    }
    return (
      // {console.log(data)}
      <div className="Todo_wrapper">
        <Header />
        <div>
          <h1> Your Saved Todos</h1>
          {data.map((data, index) => (
            <TodoItem key={data.id} value={index + 1} />
          ))}
        </div>
      </div>
    );
  }
}
