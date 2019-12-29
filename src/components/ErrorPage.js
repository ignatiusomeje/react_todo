import React from "react";
import { Link } from "react-router-dom";
import "./styles/Error.css";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Page not Found</p>
      <span>
        <Link to="/login" style={style}>
          Go to Home page
        </Link>
      </span>
    </div>
  );
};

const style = {
  textDecoration: "none",
  padding: "10px",
  cursor: "pointer",
  color: "white"
};
export default ErrorPage;
