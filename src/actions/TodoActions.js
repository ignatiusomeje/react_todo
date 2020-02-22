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
export const CLEAR_TODO = "CLEAR_TODO";
export const CLEAR = "CLEAR";
export const ISEDITING = "ISEDITING";
export const ISNOTEDITING = "ISNOTEDITING";
export const ISLOADING = "ISLOADING";

const url = "http://localhost:5000/api/v1/todos";

export const CreatesTodo = (todo, token) => {
  const data = JSON.stringify(todo);
  return dispatch => {
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
    fetch(url, {
      method: "POST",
      headers: {
        Bearer: token,
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
        if (res.status !== 200) {
          return dispatch({ type: CREATE_TODO_ERROR, payload: res });
        }
        dispatch({
          type: ISNOTEDITING
        });
        return dispatch({ type: CREATE_TODO, payload: res });
      })
      .catch(err => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
        return dispatch({ type: CREATE_TODO_ERROR, payload: err });
      });
  };
};

export const FetchAllTodos = token => {
  return dispatch => {
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
    fetch(url, {
      headers: {
        Bearer: token
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
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
      .catch(err => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
        dispatch({
          type: FETCH_ALL_TODO_ERROR,
          payload: err
        });
      });
  };
};

//deletes a single todo from the todo list

export const DeleteTodo = (id, token) => {
  return dispatch => {
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Bearer: token
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
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
      .catch(err => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
        dispatch({
          type: DELETE_TODO_ERROR,
          payload: err
        });
      });
  };
};

// allows user to tell done todos

export const IsDoneTodo = (todo, token) => {
  return dispatch => {
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify({ isDone: true });
    fetch(`${url}/${todo._id}`, {
      method: "PATCH",
      body: data,
      headers: {
        Bearer: token,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
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
      .catch(err => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
        dispatch({
          type: DONE_TODO_ERROR,
          payload: err
        });
      });
  };
};

// clears all Todos in the store
export const ClearTodo = () => {
  return {
    type: CLEAR_TODO
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

// clears Todo Error in the store
export const Clear = () => {
  return {
    type: CLEAR
  };
};

// allows user to tell edit an Activity

export const IsEditActivity = ({ activity, _id }, token) => {
  return dispatch => {
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify({ activity });
    fetch(`${url}/${_id}`, {
      method: "PATCH",
      body: data,
      headers: {
        Bearer: token,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
        if (res.status !== 200) {
          return dispatch({
            type: EDITED_ACTIVITY_ERROR,
            payload: res
          });
        }
        dispatch({
          type: ISNOTEDITING
        });
        return dispatch({
          type: EDITED_ACTIVITY,
          payload: res
        });
      })
      .catch(err => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
        dispatch({
          type: EDITED_ACTIVITY_ERROR,
          payload: err
        });
      });
  };
};

//update Done Todo from view Todo Profile

export const ViewTodo_IsDone = (todo, token) => {
  return dispatch => {
    dispatch({ type: ISLOADING, payload: { isLoading: true } });
    const data = JSON.stringify({ isDone: true });
    fetch(`${url}/${todo._id}`, {
      method: "PATCH",
      body: data,
      headers: {
        Bearer: token,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({ type: ISLOADING, payload: { isLoading: false } });
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
      .catch(err => {
        dispatch({
          type: ISLOADING,
          payload: { isLoading: false }
        });
        dispatch({
          type: VIEW_TODO_ISDONE_ERROR,
          payload: err
        });
      });
  };
};

// fetches one Todo for the user
export const FetchOneTodo = (id, token) => {
  return dispatch => {
    dispatch({
      type: ISLOADING,
      payload: {
        isLoading: true
      }
    });
    fetch(`${url}/${id}`, {
      headers: {
        Bearer: token
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: ISLOADING,
          payload: { isLoading: false }
        });
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
      .catch(err => {
        dispatch({
          type: ISLOADING,
          payload: { isLoading: false }
        });
        dispatch({
          type: FETCH_ONE_TODO_ERROR,
          payload: err
        });
      });
  };
};
