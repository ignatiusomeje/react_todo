import {
  CREATE_TODO,
  CREATE_TODO_ERROR,
  FETCH_ALL_TODO,
  FETCH_ALL_TODO_ERROR,
  DELETE_TODO,
  DELETE_TODO_ERROR,
  DONE_TODO,
  DONE_TODO_ERROR,
  VIEW_TODO_ISDONE,
  VIEW_TODO_ISDONE_ERROR,
  FETCH_ONE_TODO,
  FETCH_ONE_TODO_ERROR,
  EDITED_ACTIVITY,
  EDITED_ACTIVITY_ERROR,
  CLEAR_TODO,
  ISLOADING
} from "./../actions/TodoActions";

const INITIAL_TODO_STATE = {
  todo: [],
  todoError: null,
  viewedTodo: {},
  isLoading: false
};
export default function TodoReducer(state = INITIAL_TODO_STATE, action) {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todo: [action.payload.message, ...state.todo] };

    case FETCH_ALL_TODO:
      return {
        ...state,
        todo: [...state.todo, ...action.payload.message],
        isLoading: false
      };

    case CLEAR_TODO:
      return {
        ...state,
        todo: [],
        todoError: null
      };

    case VIEW_TODO_ISDONE:
      const view_todoPosition = state.todo.findIndex(
        todo => todo._id === action.payload.message._id
      );
      return {
        ...state,
        viewedTodo: action.payload.message,
        todo: [
          ...state.todo.slice(0, view_todoPosition),
          {
            ...state.todo[view_todoPosition],
            isDone: action.payload.message.isDone,
            durationDoneAt: action.payload.message.durationDoneAt
          },
          ...state.todo.slice(view_todoPosition + 1)
        ]
      };

    case FETCH_ONE_TODO:
      return {
        ...state,
        viewedTodo: action.payload.message
      };

    case DONE_TODO:
      const findPosition = state.todo.findIndex(
        todo => todo._id === action.payload.message._id
      );
      return {
        ...state,
        todo: [
          ...state.todo.slice(0, findPosition),
          {
            ...state.todo[findPosition],
            isDone: action.payload.message.isDone,
            durationDoneAt: action.payload.message.durationDoneAt
          },
          ...state.todo.slice(findPosition + 1)
        ]
      };

    case EDITED_ACTIVITY:
      const findLocation = state.todo.findIndex(
        todo => todo._id === action.payload.message._id
      );
      return {
        ...state,
        todo: [
          ...state.todo.slice(0, findLocation),
          {
            ...state.todo[findLocation],
            activity: action.payload.message.activity
          },
          ...state.todo.slice(findLocation + 1)
        ]
      };

    case DELETE_TODO_ERROR:
    case FETCH_ALL_TODO_ERROR:
    case CREATE_TODO_ERROR:
    case EDITED_ACTIVITY_ERROR:
    case DONE_TODO_ERROR:
    case FETCH_ONE_TODO_ERROR:
    case VIEW_TODO_ISDONE_ERROR:
      return { ...state, todoError: action.payload.message, isLoading: false };

    case DELETE_TODO:
      const deletePosition = state.todo.findIndex(
        todo => todo._id === action.payload.message._id
      );
      return {
        ...state,
        todo: [
          ...state.todo.slice(0, deletePosition),
          ...state.todo.slice(deletePosition + 1)
        ]
      };

    case ISLOADING:
      return { ...state, isLoading: action.payload.isLoading };

    default:
      return state;
  }
}
