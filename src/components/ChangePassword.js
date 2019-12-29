import React, { Component } from "react";

import "./styles/signup.css";
import "./styles/ChangePassword.css";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      verifyPassword: ""
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
      <div className="ChangePassword_modal">
        <div className="ChangePassword_modalContent login">
          <h1>Change Password</h1>
          <p>Enter your new password</p>
          <form onSubmit={this.HandleSubmit}>
            <div>
              <p className="show_hide">Password</p>
              <input
                autoFocus={true}
                type="password"
                name="password"
                required={true}
                value={this.state.password}
                onChange={this.HandleInputChanges}
                placeholder="Password"
              />
            </div>
            <div>
              <p className="show_hide">Verify Password</p>
              <input
                type="password"
                name="VerifyPassword"
                required={true}
                value={this.state.verifyPassword}
                onChange={this.HandleInputChanges}
                placeholder=" Verify Password"
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
