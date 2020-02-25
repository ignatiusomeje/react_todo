import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Header.css";
import patrick from "./../images/patrick.png";
import { connect } from "react-redux";

const Header = props => {
  const locations = useLocation();
  return (
    <div className="Header">
      <NavLink
        to={{
          pathname: "/todos",
          state: { background: locations }
        }}
        activeClassName="action"
        className="header_navlink"
      >
        Todos
      </NavLink>
      <NavLink
        to={{
          pathname: "/todos/new",
          state: { background: locations }
        }}
        className="header_navlink"
        activeClassName="action"
      >
        Create Todo
      </NavLink>
      <i className="desktop">Amount: &#8358;{props.amount}</i>
      <NavLink
        to={{
          pathname: "/profile",
          state: { background: locations }
        }}
        className="header_navlink"
        activeClassName="action"
      >
        <img
          src={patrick}
          alt="User's profile avatar"
          title="User's Profile"
          className="user_pics"
        />
      </NavLink>
      <br />
      <i className="mobile">Amount: &#8358;{props.amount}</i>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    amount: state.User.Amount
  };
};

export default connect(mapStateToProps)(Header);
