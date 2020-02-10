import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  verifyUser,
  VerifyForgottenUserPassword,
  Clear
} from "./../actions/userActions";
import "./styles/VerifiedAccount.css";

class VerifyUserAccount extends Component {
  componentDidMount() {
    this.props.Clear();
    const { email, token } = this.props.match.params;
    if (this.props.location.search) {
      return this.props.VerifyForgottenUserPassword(
        email,
        token,
        this.props.location.search
      );
    } else {
      this.props.verifyUser(email, token);
    }
  }

  componentDidUpdate() {
    if (this.props.User.isValid) {
      this.props.history.push(`/password/${this.props.User._id}`);
    }
  }

  handleOnClick = e => {
    if (this.props.error === null) {
      this.props.history.push("/login");
    } else {
      this.props.history.push("/signup");
    }
  };
  render() {
    return (
      <div>
        <div className="verifiedUser">
          {this.props.error ? (
            <p>{this.props.error}</p>
          ) : (
            <p>
              your Account has been verified, click the button below to login
            </p>
          )}
          <button onClick={this.handleOnClick}>Login</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      verifyUser,
      VerifyForgottenUserPassword,
      Clear
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    error: state.User.error,
    User: state.User.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VerifyUserAccount)
);
