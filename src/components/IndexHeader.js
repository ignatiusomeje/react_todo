import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";
import "./styles/IndexHeader.css";

const IndexHeader = props => {
  return (
    <div className="Header Main_index_header">
      <NavLink
        to="/"
        activeClassName="action"
        className="header_navlink index_header"
        exact={true}
      >
        Home
      </NavLink>
      <NavLink
        to="/signup"
        className="header_navlink index_header"
        activeClassName="action"
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className="header_navlink index_header"
        activeClassName="action"
      >
        Login
      </NavLink>
    </div>
  );
};
export default IndexHeader;
