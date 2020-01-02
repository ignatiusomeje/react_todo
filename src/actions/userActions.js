export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const ISLOADING = "ISLOADING";
export const VERIFY_ACCOUNT = "VERIFY_ACCOUNT";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";
const url = "http://localhost:5000/api/v1/users";

// Create new user account action generator
export function CreateUser(user) {
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
}

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
    console.log(data);
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
