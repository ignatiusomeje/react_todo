import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = props => {
  return (
    <div className="Header">
      <NavLink to="/todos" activeClassName="action" className="header_navlink">
        Todos
      </NavLink>
      <NavLink
        to="/new_todo"
        className="header_navlink"
        activeClassName="action"
      >
        Create Todo
      </NavLink>
      <NavLink to="#" className="header_navlink" activeClassName="action">
        Edit Profile
      </NavLink>
    </div>
  );
};
export default Header;
