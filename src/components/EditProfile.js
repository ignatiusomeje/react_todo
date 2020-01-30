import React, { Component } from "react";

import "./styles/EditProfile.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { EditUserDetail, Clear } from "./../actions/userActions";
// import "./styles/signup.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        dob: this.props.user.dob,
        address: this.props.user.address,
        phoneNumber: this.props.user.phoneNumber
      }
    };
  }
  HandleInputChanges = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    this.setState(() => ({
      user: { ...this.state.user, [targetName]: targetValue }
    }));
  };
  HandleSave = e => {
    e.preventDefault();
    this.props.EditUserDetail(this.state.user);
  };
  HandleCancel = e => {
    this.props.Clear();
    this.props.history.push("/todos");
  };
  componentDidMount() {
    this.props.Clear();
  }
  componentDidUpdate() {
    if (this.props.error === "no error") {
      this.props.Clear();
      this.props.history.push("/todos");
    }
  }
  render() {
    return (
      <div className="EditProfile_wrapper">
        <div className="EditProfile">
          <h1>Edit Your Profile</h1>
          <p></p>
          <form onSubmit={this.HandleSubmit}>
            <div>
              <p className="show_hide">First Name</p>
              <input
                type="text"
                name="firstName"
                autoFocus={true}
                required={true}
                value={this.state.user.firstName}
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
                value={this.state.user.lastName}
                onChange={this.HandleInputChanges}
                placeholder="Last Name"
              />
            </div>
            <div>
              <p className="show_hide">Date of Birth</p>
              <input
                type="date"
                name="dob"
                required={true}
                value={this.state.user.dob}
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
                value={this.state.user.address}
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
                value={this.state.user.phoneNumber}
                onChange={this.HandleInputChanges}
                placeholder="Phone Number"
              />
            </div>
            <div className="EditProfile_btn">
              <button onClick={this.HandleSave} disabled={this.props.isLoading}>
                Save
              </button>
              <button onClick={this.HandleCancel}>Cancel</button>
            </div>
            {this.props.error && (
              <p className="edit_profile_error">{this.props.error}</p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.User.user,
    error: state.User.error,
    isLoading: state.User.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ EditUserDetail, Clear }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditProfile)
);
