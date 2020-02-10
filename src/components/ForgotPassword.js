import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Reset_password, Clear } from "./../actions/userActions";

import "./styles/ForgotPassword.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: ""
      },
      error: "",
      error_status: false
    };
  }

  HandleSave = e => {
    e.preventDefault();
    if (this.state.user.email === "" || this.state.user.email.trim() === "") {
      this.setState(() => ({
        ...this.state,
        error: "Empty field not allowed",
        error_status: true
      }));
    } else {
      this.props.Reset_password(this.state.user);
    }
  };

  handleOnHover = e => {
    if (this.state.user.email === "" || this.state.user.email.trim() === "") {
      e.target.setAttribute("style", "cursor: not-allowed");
      e.target.setAttribute("disabled", "true");
    } else {
      e.target.removeAttribute("style");
      e.target.removeAttribute("disabled");
    }
  };

  HandleCancel = e => {
    this.props.Clear();
    this.props.history.push("/login");
  };

  componentDidMount() {
    this.props.Clear();
    this.setState(() => ({
      error: ""
    }));
  }

  componentDidUpdate() {
    if (this.props.fetchInfo !== null) {
      // this.props.Clear();
      this.props.history.push("/unverified");
    }
  }

  HandleInputChanges = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    this.props.Clear();
    this.setState(() => ({
      ...this.state,
      user: { ...this.state.user, [targetName]: targetValue },
      error: "",
      error_status: false
    }));
  };
  render() {
    return (
      <div className="ForgotPassword">
        <h1>Forgot your Password</h1>
        <p>Enter your email and a reset-link will be sent to it</p>
        <form onSubmit={this.HandleSave}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.state.user.email}
              onChange={this.HandleInputChanges}
            />
          </div>
          <div className="forgot_password_btn">
            <button
              className={this.state.error ? "disabledbtn" : ""}
              disabled={
                this.props.isLoading || this.state.error_status ? true : false
              }
              onMouseEnter={this.handleOnHover}
            >
              Submit
            </button>
            <button onClick={this.HandleCancel}>Cancel</button>
          </div>
        </form>
        {(this.props.error || this.state.error) && (
          <p className="ForgotPassword_error">
            {this.props.error || this.state.error}
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.User.error,
    fetchInfo: state.User.fetchInfo,
    isLoading: state.User.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ Reset_password, Clear }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPassword)
);
