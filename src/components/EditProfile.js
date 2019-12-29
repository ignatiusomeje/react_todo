import React, { Component } from "react";

import "./styles/EditProfile.css";
// import "./styles/signup.css";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      dob: "",
      address: "",
      phoneNumber: ""
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
      <div className="EditProfile_modal">
        <div className="EditProfile_modalContent">
          <button className="close">X</button>
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
                value={this.state.firstName}
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
                value={this.state.lastName}
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
                value={this.state.username}
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
                value={this.state.email}
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
                value={this.state.password}
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
                value={this.state.dob}
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
                value={this.state.address}
                onChange={this.HandleInputChanges}
                placeholder="Address"
              />
            </div>
            <div>
              <p className="show_hide">Phone Number</p>
              <input
                type="number"
                name="phoneNumber"
                required={true}
                value={this.state.phoneNumber}
                onChange={this.HandleInputChanges}
                placeholder="Phone Number"
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}