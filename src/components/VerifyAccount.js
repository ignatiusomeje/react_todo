import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IndexHeader from "./IndexHeader";
import "./styles/VerifiedAccount.css";
import { VerifyAccount } from "../actions/userActions";

class ShowNotVerified extends Component {
  componentDidMount() {
    while (this.props.verify) {
      return <p>Loading......</p>;
    }
    this.props.VerifyAccount();
  }
  render() {
    return (
      <div>
        <IndexHeader />
        <div className="wrapper_verify">
          <h1>Welcome OnBoard</h1>
          <p>{this.props.verify}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    verify: state.User.verify
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ VerifyAccount }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowNotVerified);
