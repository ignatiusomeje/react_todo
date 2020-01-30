export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const ISLOADING = "ISLOADING";
export const VERIFY_ACCOUNT = "VERIFY_ACCOUNT";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const EDIT_USER = "EDIT_USER";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";

// Reset_password
const url = "http://localhost:5000/api/v1/users";

// Create new user account action generator
export const CreateUser = user => {
  return dispatch => {
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
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
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
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

// account login action generator
export const Login = user => {
  return dispatch => {
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
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
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
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
