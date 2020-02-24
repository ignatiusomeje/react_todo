import dotenv from "dotenv";

dotenv.config();

export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const USER_ISLOADING = "USER_ISLOADING";
export const VERIFY_ACCOUNT = "VERIFY_ACCOUNT";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const EDIT_USER = "EDIT_USER";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const VERIFY_USER_ERROR = "VERIFY_USER_ERROR";
export const VERIFY_USER = "VERIFY_USER";
export const lOGOUT = "lOGOUT";
export const ISEDITING = "ISEDITING";
export const ISNOTEDITING = "ISNOTEDITING";
export const VERIFY_USER_PASSWORD_ERROR = "VERIFY_USER_PASSWORD_ERROR";
export const VERIFY_USER_PASSWORD = "VERIFY_USER_PASSWORD";
export const CHANGE_PASSWORD_ERROR = "CHANGE_PASSWORD_ERROR";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const PAYER_ERROR = "PAYER_ERROR";
export const PAYER = "PAYER";
export const PAYMENT_ERROR = "PAYMENT_ERROR";
export const PAYMENT = "PAYMENT";

// Reset_password
const url = process.env.REACT_APP_ONLINE_USER_URL;

// Create new user account action generator
export const CreateUser = user => {
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify(user);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: CREATE_USER_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: CREATE_USER,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: CREATE_USER_ERROR,
          payload: err
        });
      });
  };
};

// Edits a user's account action generator
export const EditUserDetail = (user, token) => {
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify(user);
    fetch(`${url}/change-details`, {
      method: "PATCH",
      headers: {
        Bearer: token,
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: EDIT_USER_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: EDIT_USER,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: EDIT_USER_ERROR,
          payload: err
        });
      });
  };
};

//verify the new created user account action generator
export const VerifyAccount = () => {
  return {
    type: VERIFY_ACCOUNT
  };
};

//clear the error in the store action generator
export const Clear = () => {
  return {
    type: CLEAR_ERROR
  };
};

// SETS EDITING TO TRUE
export const IsEdit = () => {
  return {
    type: ISEDITING
  };
};

//SETS EDITING TO FALSE
export const IsNotEdit = () => {
  return {
    type: ISNOTEDITING
  };
};

// logs user out
export const Logout = () => {
  return {
    type: lOGOUT
  };
};

// account login action generator
export const Login = user => {
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify(user);
    fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: LOGIN_USER_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: LOGIN_USER,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: LOGIN_USER_ERROR,
          payload: err
        });
      });
  };
};

//allows users to get reset link in the email

export const Reset_password = user => {
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify(user);
    fetch(`${url}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: RESET_PASSWORD_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: RESET_PASSWORD,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: RESET_PASSWORD_ERROR,
          payload: err
        });
      });
  };
};

export const verifyUser = (email, token) => {
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    fetch(`${url}/${email}/${token}`)
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: VERIFY_USER_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: VERIFY_USER,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: VERIFY_USER_ERROR,
          payload: err
        });
      });
  };
};

export const VerifyForgottenUserPassword = (email, token, search) => {
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    fetch(`${url}/${email}/${token}${search}`)
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: VERIFY_USER_PASSWORD_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: VERIFY_USER_PASSWORD,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: VERIFY_USER_PASSWORD_ERROR,
          payload: err
        });
      });
  };
};

// /password/:id

export const ChangeUserPassword = (password, id) => {
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify(password);
    fetch(`${url}/password/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: CHANGE_PASSWORD_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: CHANGE_PASSWORD,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: CHANGE_PASSWORD_ERROR,
          payload: err
        });
      });
  };
};

//allows users to make payments
export const Pay = (token, amount, response) => {
  const payer = { amount, response };
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify(payer);
    fetch(`${url}/fund`, {
      method: "PATCH",
      headers: {
        Bearer: token,
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: PAYER_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: PAYER,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: PAYER_ERROR,
          payload: err
        });
      });
  };
};

//allows users to make fetch their payment
export const Payments = token => {
  return dispatch => {
    dispatch({ type: USER_ISLOADING, payload: { isLoading: true } });
    fetch(`${url}/payments`, {
      headers: {
        Bearer: token,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: PAYMENT_ERROR,
            payload: res
          });
        }
        dispatch({ type: CLEAR_ERROR });
        return dispatch({
          type: PAYMENT,
          payload: res
        });
      })
      .catch(err => {
        return dispatch({
          type: PAYMENT_ERROR,
          payload: err
        });
      });
  };
};
