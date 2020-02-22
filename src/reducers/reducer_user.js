import {
  CREATE_USER,
  CREATE_USER_ERROR,
  USER_ISLOADING,
  VERIFY_ACCOUNT,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  CLEAR_ERROR,
  EDIT_USER,
  EDIT_USER_ERROR,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD,
  VERIFY_USER,
  VERIFY_USER_ERROR,
  lOGOUT,
  ISEDITING,
  ISNOTEDITING,
  VERIFY_USER_PASSWORD,
  VERIFY_USER_PASSWORD_ERROR,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD,
  PAYER,
  PAYER_ERROR,
  PAYMENT_ERROR,
  PAYMENT
} from "../actions/userActions";

const INITIAL_STATE = {
  user: {},
  verify: null,
  isNotVerify: false,
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isEditing: false,
  fetchInfo: null,
  Amount: 0
};

export default function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        verify: action.payload.message,
        isNotVerify: true,
        isLoading: false
      };

    case PAYMENT:
    case PAYER:
      return {
        ...state,
        Amount: action.payload.message.amount,
        isLoading: false
      };

    case VERIFY_USER:
      return {
        ...state,
        user: {},
        verify: null,
        isNotVerify: false,
        isLoading: false
      };

    case VERIFY_USER_PASSWORD:
      return {
        ...state,
        user: action.payload.message,
        isLoading: false
      };

    case ISNOTEDITING:
      return {
        ...state,
        isEditing: false
      };

    case ISEDITING:
      return {
        ...state,
        isEditing: true
      };

    case CHANGE_PASSWORD:
    case RESET_PASSWORD:
      return {
        ...state,
        user: {},
        fetchInfo: action.payload.message,
        isLoading: false
      };

    case EDIT_USER:
      return {
        ...state,
        user: action.payload.message.details,
        fetchInfo: action.payload.message.info,
        isLoading: false
      };

    case PAYMENT_ERROR:
    case PAYER_ERROR:
    case VERIFY_USER_PASSWORD_ERROR:
    case CHANGE_PASSWORD_ERROR:
    case VERIFY_USER_ERROR:
    case RESET_PASSWORD_ERROR:
    case EDIT_USER_ERROR:
    case CREATE_USER_ERROR:
      return {
        ...state,
        error: action.payload.message,
        isLoading: false
      };

    case VERIFY_ACCOUNT:
      return state;

    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.message,
        verify: null,
        isLoading: false,
        isLoggedIn: true
      };

    case lOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        isLoading: false
      };

    case CLEAR_ERROR:
      return { ...state, error: null, isNotVerify: false, fetchInfo: null };

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
        isLoading: false
      };

    case USER_ISLOADING:
      return { ...state, isLoading: action.payload.isLoading };

    default:
      return state;
  }
}
