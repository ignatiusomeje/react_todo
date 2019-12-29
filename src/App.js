import React from "react";
// NavLink
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import ChangePassword from "./components/ChangePassword";
import Todo from "./components/Todo";
import ForgotPassword from "./components/ForgotPassword";
import CreateTodo from "./components/CreateTodo";
import EditProfile from "./components/EditProfile";
import VerifyUserAccount from "./components/VerifyUserAccount";
import IndividualTodo from "./components/IndividualTodo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact={true} path="/todos">
          <Todo />
        </Route>
        <Route path="/todos/:id">
          <IndividualTodo value={1} />
        </Route>
        <Route path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/new_todo">
          <CreateTodo />
        </Route>
        <Route path="/edit_profile">
          <EditProfile />
        </Route>
        <Route path="/password/:id">
          <ChangePassword />
        </Route>
        <Route path="/:email/:token">
          <VerifyUserAccount />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
