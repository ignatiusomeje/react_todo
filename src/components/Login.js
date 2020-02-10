import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./styles/SignInSignOut.css";
import "./styles/signup.css";
import { Login, Clear, Logout } from "./../actions/userActions";
import IndexHeader from "./IndexHeader";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        password: ""
      }
    };
  }
  HandleInputChanges = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    this.setState(() => ({
      form: { ...this.state.form, [targetName]: targetValue }
    }));
  };
  HandleSubmit = e => {
    e.preventDefault();
    const button = document
      .getElementsByTagName("button")[0]
      .getAttribute("disabled");

    if (!button) {
      this.props.Login(this.state.form);
      this.setState(() => ({
        form: {
          username: "",
          password: ""
        }
      }));
    }
  };
  componentDidUpdate() {
    if (this.props.error === null && this.props.isLoggedIn) {
      return this.props.history.push("/todos");
    } else if (this.props.isNotVerify) {
      return this.props.history.push("/unverified");
    }
  }
  componentDidMount() {
    this.props.Clear();
    this.props.Logout();
  }
  render() {
    return (
      <div>
        <IndexHeader />
        <div className="bg-login">
          <div className="login">
            <h1>Login</h1>
            <p>
              Welcome,please enter your email or username and Password to login.
              <br />
              <br />
              Doesn't have an account? it takes less than a minute. if you do
              then &nbsp;<Link to="/signup">Sign Up</Link>
            </p>
            <form onSubmit={this.HandleSubmit}>
              <div>
                <p className="show_hide">Username</p>
                <input
                  autoFocus={true}
                  type="text"
                  name="username"
                  required={true}
                  value={this.state.form.username}
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
                  value={this.state.form.password}
                  onChange={this.HandleInputChanges}
                  placeholder="Password"
                />
              </div>
              <button type="submit" disabled={this.props.isLoading}>
                Login
              </button>
              {this.props.error && (
                <p className="signup_error">{this.props.error}</p>
              )}
              <p className="login_forgot">
                Forgot your password? then click on &nbsp;
                <Link to="/forgotpassword">Forgot Password</Link> to reset your
                password
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ Login, Clear, Logout }, dispatch);
};

const mapStateToProps = state => {
  return {
    error: state.User.error,
    isLoading: state.User.isLoading,
    isNotVerify: state.User.isNotVerify,
    isLoggedIn: state.User.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);
