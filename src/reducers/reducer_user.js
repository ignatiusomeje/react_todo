import {
  CREATE_USER,
  CREATE_USER_ERROR,
  ISLOADING,
  VERIFY_ACCOUNT,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  CLEAR_ERROR,
  EDIT_USER,
  EDIT_USER_ERROR,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD
} from "../actions/userActions";

const INITIAL_STATE = {
  user: {
    token: {
      access: "Bearer",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBkOWRmNGRmOWU3MzBlYmQ4N2YwZDEiLCJ0aW1lIjoiMjAyMC0wMS0wMlQxNjoyNTozOC41MjJaIiwiYWNjZXNzIjoiQmVhcmVyIiwiaWF0IjoxNTc3OTgyMzM4fQ.gBZv1PXfGnwMZzn2fNjnRCK59dEnOYUeRm9W2zW5E2c"
    },
    lastSeen: "Today at 4:25 PM",
    lastUpdate: null,
    isValid: false,
    authToken: null,
    _id: "5e0d9df4df9e730ebd87f0d1",
    firstName: "Ignatius",
    lastName: "Omeje",
    username: "mrexcel153",
    email: "Mrexcel153@gmail.com",
    password: "$2a$10$W1KFNjpcTFENw4m/x0GRh.z9GCAPogtsWhzcPqPqiEwzoATxbwC.i",
    dob: "2020-01-30",
    address: "53 Mount Enugu",
    phoneNumber: "8167623337"
  },
  // {},
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
    case RESET_PASSWORD:
    case EDIT_USER:
      return {
        ...state,
        user: action.payload.message.details,
        isLoading: false,
        error: "no error"
      };
    case RESET_PASSWORD_ERROR:
    case EDIT_USER_ERROR:
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
