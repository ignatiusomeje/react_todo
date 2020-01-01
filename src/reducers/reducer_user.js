import { CREATE_USER, CREATE_USER_ERROR } from "../actions/userActions";

const INITIAL_STATE = {
  user: {},
  todo: [],
  selectedTodo: null,
  error: null
};

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return console.log("action:", action);
    case CREATE_USER_ERROR:
      return console.log("action error", action);
    default:
      return state;
  }
}
