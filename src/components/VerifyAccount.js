import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IndexHeader from "./IndexHeader";
import "./styles/VerifiedAccount.css";
import { VerifyAccount } from "../actions/userActions";

class ShowNotVerified extends Component {
  componentDidMount() {
    this.props.VerifyAccount();
  }
  render() {
    return (
      <div>
        <IndexHeader />
        <div className="wrapper_verify">
          <h1>Welcome OnBoard</h1>
          <p>{this.props.verify ? this.props.verify : this.props.fetchInfo}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    verify: state.User.verify,
    fetchInfo: state.User.fetchInfo
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ VerifyAccount }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowNotVerified);
