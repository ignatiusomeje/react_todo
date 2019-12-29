import React, { Component } from "react";
import "./styles/SignInSignOut.css";
import { Link } from "react-router-dom";
import "./styles/signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
      <div className="bg-login">
        <div className="login">
          <h1>Login</h1>
          <p>
            Welcome,please enter your email or username and Password to login.{" "}
            <br />
            <br />
            Doesn't have an account? it takes less than a minute. if you do then
            &nbsp;<Link to="/signup">Sign Up</Link>
          </p>
          <form onSubmit={this.HandleSubmit}>
            <div>
              <p className="show_hide">Username</p>
              <input
                autoFocus={true}
                type="text"
                name="username"
                required={true}
                value={this.state.username}
                onChange={this.HandleInputChanges}
                placeholder="Username"
              />
            </div>
            <div>
              <p className="show_hide">Password</p>
              <input
                type="password"
                name="password"
                required={true}
                value={this.state.password}
                onChange={this.HandleInputChanges}
                placeholder="Password"
              />
            </div>
            <button type="submit">Sign Up</button>
            <p className="login_forgot">
              Forgot your password? then click on{" "}
              <Link to="/forgotpassword">Forgot Password</Link> to reset your
              password
            </p>
          </form>
        </div>
      </div>
    );
  }
}
