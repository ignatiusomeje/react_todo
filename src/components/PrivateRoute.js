import { Redirect, Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const PrivateRoute = ({ children, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isLoggedIn && user.user.token.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  user: state.User
});

export default connect(mapStateToProps)(PrivateRoute);
