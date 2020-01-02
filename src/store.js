import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import TodoReducer from "./reducers/reducer_todos";
import UserReducer from "./reducers/reducer_user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    User: UserReducer,
    Todos: TodoReducer
    // currentTodo: {}
  }),
  composeEnhancers(applyMiddleware(thunk))
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
