import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Header.css";
import patrick from "./../images/patrick.png";

const Header = props => {
  const locations = useLocation();
  console.log("location header: ", locations);
  return (
    <div className="Header">
      <NavLink
        to={{
          pathname: "/todos",
          state: { background: locations }
        }}
        // to="/todos"
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
      <NavLink
        to={{
          pathname: "/profile",
          state: { background: locations }
        }}
        // to="/edit_profile"
        className="header_navlink"
        activeClassName="action"
      >
        <img src={patrick} title="User's Profile" className="user_pics" />
      </NavLink>
    </div>
  );
};
export default Header;
