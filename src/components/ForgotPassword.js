import React, { Component } from "react";
import "./styles/ForgotPassword.css";
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
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
      <div className="ForgotPassword">
        <h1>Forgot your Password</h1>
        <p>Enter your email and a reset-link will be sent to your Email</p>
        <form onSubmit={this.HandleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.HandleInputChanges}
            />
          </div>
          <button>Submit</button>
        </form>
        <p className="ForgotPassword_error">Email not Registered</p>
      </div>
    );
  }
}
