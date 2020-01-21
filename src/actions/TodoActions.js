export const CREATE_TODO = "CREATE_TODO";
export const CREATE_TODO_ERROR = "CREATE_TODO_ERROR";
export const FETCH_ALL_TODO = "FETCH_ALL_TODO";
export const FETCH_ALL_TODO_ERROR = "FETCH_ALL_TODO_ERROR";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";
export const DELETE_TODO = "DELETE_TODO";
export const DONE_TODO_ERROR = "DONE_TODO_ERROR";
export const DONE_TODO = "DONE_TODO";
export const VIEW_TODO_ISDONE = "VIEW_TODO_ISDONE";
export const VIEW_TODO_ISDONE_ERROR = "VIEW_TODO_ISDONE_ERROR";
export const FETCH_ONE_TODO = "FETCH_ONE_TODO";
export const FETCH_ONE_TODO_ERROR = "FETCH_ONE_TODO_ERROR";
export const EDITED_ACTIVITY = "EDITED_ACTIVITY";
export const EDITED_ACTIVITY_ERROR = "EDITED_ACTIVITY_ERROR";

const url = "http://localhost:5000/api/v1/todos";

export const CreatesTodo = todo => {
  const data = JSON.stringify(todo);
  return dispatch => {
    fetch(url, {
      method: "POST",
      headers: {
        Bearer:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBkOWRmNGRmOWU3MzBlYmQ4N2YwZDEiLCJ0aW1lIjoiMjAyMC0wMS0wMlQxNjoyNTozOC41MjJaIiwiYWNjZXNzIjoiQmVhcmVyIiwiaWF0IjoxNTc3OTgyMzM4fQ.gBZv1PXfGnwMZzn2fNjnRCK59dEnOYUeRm9W2zW5E2c",
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({ type: CREATE_TODO_ERROR, payload: res });
        }
        return dispatch({ type: CREATE_TODO, payload: res });
      })
      .catch(err => {
        return dispatch({ type: CREATE_TODO_ERROR, payload: err });
      });
  };
};

export const FetchAllTodos = () => {
  return dispatch => {
    fetch(url, {
      headers: {
        Bearer:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBkOWRmNGRmOWU3MzBlYmQ4N2YwZDEiLCJ0aW1lIjoiMjAyMC0wMS0wMlQxNjoyNTozOC41MjJaIiwiYWNjZXNzIjoiQmVhcmVyIiwiaWF0IjoxNTc3OTgyMzM4fQ.gBZv1PXfGnwMZzn2fNjnRCK59dEnOYUeRm9W2zW5E2c"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: FETCH_ALL_TODO_ERROR,
            payload: res
          });
        }
        return dispatch({
          type: FETCH_ALL_TODO,
          payload: res
        });
      })
      .catch(err =>
        dispatch({
          type: FETCH_ALL_TODO_ERROR,
          payload: err
        })
      );
  };
};

//deletes a single todo from the todo list

export const DeleteTodo = id => {
  return dispatch => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Bearer:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBkOWRmNGRmOWU3MzBlYmQ4N2YwZDEiLCJ0aW1lIjoiMjAyMC0wMS0wMlQxNjoyNTozOC41MjJaIiwiYWNjZXNzIjoiQmVhcmVyIiwiaWF0IjoxNTc3OTgyMzM4fQ.gBZv1PXfGnwMZzn2fNjnRCK59dEnOYUeRm9W2zW5E2c"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: DELETE_TODO_ERROR,
            payload: res
          });
        }
        return dispatch({
          type: DELETE_TODO,
          payload: res
        });
      })
      .catch(err =>
        dispatch({
          type: DELETE_TODO_ERROR,
          payload: err
        })
      );
  };
};

// allows user to tell done todos

export const IsDoneTodo = todo => {
  return dispatch => {
    const data = JSON.stringify({ isDone: true });
    fetch(`${url}/${todo._id}`, {
      method: "PATCH",
      body: data,
      headers: {
        Bearer:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBkOWRmNGRmOWU3MzBlYmQ4N2YwZDEiLCJ0aW1lIjoiMjAyMC0wMS0wMlQxNjoyNTozOC41MjJaIiwiYWNjZXNzIjoiQmVhcmVyIiwiaWF0IjoxNTc3OTgyMzM4fQ.gBZv1PXfGnwMZzn2fNjnRCK59dEnOYUeRm9W2zW5E2c",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: DONE_TODO_ERROR,
            payload: res
          });
        }
        return dispatch({
          type: DONE_TODO,
          payload: res
        });
      })
      .catch(err =>
        dispatch({
          type: DONE_TODO_ERROR,
          payload: err
        })
      );
  };
};

// allows user to tell edit an Activity

export const IsEditActivity = ({ activity, _id }) => {
  return dispatch => {
    const data = JSON.stringify({ activity });
    fetch(`${url}/${_id}`, {
      method: "PATCH",
      body: data,
      headers: {
        Bearer:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBkOWRmNGRmOWU3MzBlYmQ4N2YwZDEiLCJ0aW1lIjoiMjAyMC0wMS0wMlQxNjoyNTozOC41MjJaIiwiYWNjZXNzIjoiQmVhcmVyIiwiaWF0IjoxNTc3OTgyMzM4fQ.gBZv1PXfGnwMZzn2fNjnRCK59dEnOYUeRm9W2zW5E2c",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: EDITED_ACTIVITY_ERROR,
            payload: res
          });
        }
        return dispatch({
          type: EDITED_ACTIVITY,
          payload: res
        });
      })
      .catch(err =>
        dispatch({
          type: EDITED_ACTIVITY_ERROR,
          payload: err
        })
      );
  };
};

//update Done Todo from view Todo Profile

export const ViewTodo_IsDone = todo => {
  return dispatch => {
    const data = JSON.stringify({ isDone: true });
    fetch(`${url}/${todo._id}`, {
      method: "PATCH",
      body: data,
      headers: {
        Bearer:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBkOWRmNGRmOWU3MzBlYmQ4N2YwZDEiLCJ0aW1lIjoiMjAyMC0wMS0wMlQxNjoyNTozOC41MjJaIiwiYWNjZXNzIjoiQmVhcmVyIiwiaWF0IjoxNTc3OTgyMzM4fQ.gBZv1PXfGnwMZzn2fNjnRCK59dEnOYUeRm9W2zW5E2c",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: VIEW_TODO_ISDONE_ERROR,
            payload: res
          });
        }
        return dispatch({
          type: VIEW_TODO_ISDONE,
          payload: res
        });
      })
      .catch(err =>
        dispatch({
          type: VIEW_TODO_ISDONE_ERROR,
          payload: err
        })
      );
  };
};

// fetches one Todo for the user
export const FetchOneTodo = id => {
  return dispatch => {
    fetch(`${url}/${id}`, {
      headers: {
        Bearer:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTBkOWRmNGRmOWU3MzBlYmQ4N2YwZDEiLCJ0aW1lIjoiMjAyMC0wMS0wMlQxNjoyNTozOC41MjJaIiwiYWNjZXNzIjoiQmVhcmVyIiwiaWF0IjoxNTc3OTgyMzM4fQ.gBZv1PXfGnwMZzn2fNjnRCK59dEnOYUeRm9W2zW5E2c"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status !== 200) {
          return dispatch({
            type: FETCH_ONE_TODO_ERROR,
            payload: res
          });
        }
        return dispatch({
          type: FETCH_ONE_TODO,
          payload: res
        });
      })
      .catch(err =>
        dispatch({
          type: FETCH_ONE_TODO_ERROR,
          payload: err
        })
      );
  };
};
