import {
  CREATE_USER,
  CREATE_USER_ERROR,
  ISLOADING,
  VERIFY_ACCOUNT,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  CLEAR_ERROR
} from "../actions/userActions";

const INITIAL_STATE = {
  user: {},
  verify: null,
  isNotVerify: false,
  error: null,
  isLoading: false
};

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        verify: action.payload.message,
        isLoading: false,
        error: "no error"
      };
    case CREATE_USER_ERROR:
      return { ...state, error: action.payload.message, isLoading: false };
    case VERIFY_ACCOUNT:
      return state;
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.message,
        isLoading: false,
        error: "no error"
      };
    case CLEAR_ERROR:
      return { ...state, error: null, isNotVerify: false };
    case LOGIN_USER_ERROR:
      if (action.payload.message.includes("verify your account")) {
        return {
          ...state,
          verify: action.payload.message,
          isLoading: false,
          isNotVerify: true
        };
      }
      return {
        ...state,
        error: action.payload.message,
        isLoading: false,
        isNotVerify: false
      };
    case ISLOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
}
