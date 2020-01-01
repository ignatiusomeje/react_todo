import axios from "axios";
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
const url = "http://localhost:5000/api/v1/users";
// const headers = ;
export function CreateUser(user) {
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
        return dispatch => {
          return dispatch({
            type: CREATE_USER_ERROR,
            payload: res
          });
        };
      }
      console.log("res: ", res);
      return dispatch => {
        return dispatch({
          type: CREATE_USER,
          payload: res.message
        });
      };
    })
    .catch(err => {
      return dispatch => {
        return dispatch({
          type: CREATE_USER_ERROR,
          payload: user
        });
      };
    });
}
