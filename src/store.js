import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import TodoReducer from "./reducers/reducer_todos";
import UserReducer from "./reducers/reducer_user";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    User: UserReducer,
    Todos: TodoReducer
    // currentTodo: {}
  })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};

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
