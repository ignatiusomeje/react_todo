import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./styles/signup.css";
import "./styles/SignInSignOut.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CreateUser, Clear } from "./../actions/userActions";
import IndexHeader from "./IndexHeader";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        dob: "",
        address: "",
        phoneNumber: ""
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
      this.props.CreateUser(this.state.form);
    }
  };
  componentDidUpdate() {
    if (this.props.error === "no error") {
      return this.props.history.push("/unverified");
    }
  }
  componentDidMount() {
    this.props.Clear();
  }
  render() {
    return (
      <div>
        <IndexHeader />
        <div className="wrappers">
          <div className="signup">
            <h1>Register</h1>
            <p>
              Doesn't have an account? it takes less than a minute. if you do
              then &nbsp;
              <Link to="/login">Sign In</Link>
            </p>
            <form onSubmit={this.HandleSubmit}>
              <div>
                <p className="show_hide">First Name</p>
                <input
                  type="text"
                  name="firstName"
                  autoFocus={true}
                  required={true}
                  value={this.state.form.firstName}
                  onChange={this.HandleInputChanges}
                  placeholder="First Name"
                />
              </div>
              <div>
                <p className="show_hide">Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  required={true}
                  value={this.state.form.lastName}
                  onChange={this.HandleInputChanges}
                  placeholder="Last Name"
                />
              </div>
              <div>
                <p className="show_hide">Username</p>
                <input
                  type="text"
                  name="username"
                  required={true}
                  value={this.state.form.username}
                  onChange={this.HandleInputChanges}
                  placeholder="Username"
                />
              </div>
              <div>
                <p className="show_hide">Email</p>
                <input
                  type="email"
                  name="email"
                  required={true}
                  value={this.state.form.email}
                  onChange={this.HandleInputChanges}
                  placeholder="Email"
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
              <div>
                <p className="show_hide">Date of Birth</p>
                <input
                  type="date"
                  name="dob"
                  required={true}
                  value={this.state.form.dob}
                  onChange={this.HandleInputChanges}
                  placeholder="Date of Birth"
                />
              </div>
              <div>
                <p className="show_hide">Address</p>
                <input
                  type="text"
                  name="address"
                  required={true}
                  value={this.state.form.address}
                  onChange={this.HandleInputChanges}
                  placeholder="Address"
                />
              </div>
              <div>
                <p className="show_hide">Phone Number</p>
                <input
                  type="tel"
                  name="phoneNumber"
                  required={true}
                  value={this.state.form.phoneNumber}
                  onChange={this.HandleInputChanges}
                  placeholder="Phone Number"
                />
              </div>
              <button
                type="submit"
                disabled={this.props.isLoading ? true : false}
              >
                Sign Up
              </button>
              {this.props.error && (
                <p className="signup_error">{this.props.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ CreateUser, Clear }, dispatch);
};

const mapStateToProps = state => {
  return {
    error: state.User.error,
    isLoading: state.User.isLoading
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup)
);
