import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
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
import ShowNotVerified from "./components/VerifyAccount";
import EditTodo from "./components/EditTodo";

function App() {
  // i'm getting the exact location that we are in using this method useLocation();

  const location = useLocation();
  console.log("location: ", location);

  //in the background variable, i'm checking if the state has been added to the location object, if yes, it sets the background to the state.bacground value.

  const background = location.state && location.state.background;

  console.log("background: ", background);
  return (
    <div>
      {/* // whenever location is added to Switch, it prevents the path from
      working. so in the location props i'm adding the background to it if the
      background has a value else the location. */}
      <Switch location={background || location}>
        <Route path="/signup" children={<Signup />} />
        <Route path="/login" children={<Login />} />
        <Route path="/unverified" children={<ShowNotVerified />} />
        <Route exact={true} path="/todos" children={<Todo />} />
        {/* <Route path="/todos/new" children={<CreateTodo />} /> */}
        {/* <Route path="/todos/:id" children={<IndividualTodo value={1} />} /> */}
        <Route path="/forgotPassword" children={<ForgotPassword />} />
        <Route path="/edit_profile" children={<EditProfile />} />
        <Route path="/password/:id" children={<ChangePassword />} />
        <Route path="user/:email/:token" children={<VerifyUserAccount />} />
        <Route children={<ErrorPage />} />
      </Switch>
      {background && <Route path="/todo/edit/:id" children={<EditTodo />} />}

      {background && (
        <Route path="/todo/:id" exact children={<IndividualTodo value={1} />} />
      )}

      {background && <Route path="/todos/new" children={<CreateTodo />} />}
    </div>
  );
}

const MainRoutes = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default MainRoutes;
