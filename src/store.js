import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import TodoReducer from "./reducers/reducer_todos";
import UserReducer from "./reducers/reducer_user";

const store = createStore(
  combineReducers(
    {
      User: UserReducer,
      Todos: TodoReducer
      // currentTodo: {}
    }
  ),
  applyMiddleware(thunk)
);

export default store;

// creating an account***********
// "firstName" -
//   "lastName" -
//   "username" -
//   "email" -
//   "password" -
//   "dob" -
//   "address" -
//   "phoneNumber";

// login*****************
// "username"
//  "password";
