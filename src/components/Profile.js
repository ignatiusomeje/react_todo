import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles/Profile.css";
import { connect } from "react-redux";
import { Logout } from "./../actions/userActions";
import { bindActionCreators } from "redux";
// import "./styles/signup.css";

class Profile extends Component {
  HandleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.push("/todos");
  };

  HandleEditProfileOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.push("/edit_profile");
  };

  HandleLogoutOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.Logout();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="Profile_modal">
        <div className="Profile_modalContent">
          <button className="close" onClick={this.HandleOnClick}>
            X
          </button>

          <div>
            <p className="lastseen">last Seen: {this.props.user.lastSeen}</p>
            <div className="Profile_detail">
              <p>First Name:</p>
              <p>{this.props.user.firstName}</p>
            </div>
            <div className="Profile_detail">
              <p>Last Name:</p>
              <p>{this.props.user.lastName}</p>
            </div>
            <div className="Profile_detail">
              <p>Username:</p>
              <p> {this.props.user.username} </p>
            </div>
            <div className="Profile_detail">
              <p>Email:</p>
              <p>{this.props.user.email}</p>
            </div>
            <div className="Profile_detail">
              <p>Date of Birth:</p>
              <p>{this.props.user.dob}</p>
            </div>
            <div className="Profile_detail">
              <p>Address:</p>
              <p>{this.props.user.address}</p>
            </div>
            <div className="Profile_detail">
              <p>Phone Number:</p>
              <p>{this.props.user.phoneNumber} </p>
            </div>
            <div className="profile_btn">
              <button onClick={this.HandleEditProfileOnClick}>
                Edit Profile
              </button>
              <button onClick={this.HandleLogoutOnClick}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.User.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ Logout }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
