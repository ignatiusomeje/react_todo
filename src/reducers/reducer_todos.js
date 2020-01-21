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
  EDITED_ACTIVITY_ERROR
} from "./../actions/TodoActions";

const INITIAL_TODO_STATE = {
  todo: [],
  todoError: null,
  viewedTodo: {}
  // {
  //   isDone: false,
  //   isDoneDate: null,
  //   isDeleted: false,
  //   durationCreatedAt: "Today at 1:01 PM",
  //   durationDoneAt: null,
  //   _id: "5e19c711fc51e62dfcdb8cc7",
  //   activity: "testing my new todo route",
  //   creator: "5e0d9df4df9e730ebd87f0d1",
  //   CreatedAt: "2020-01-11T13:01:05.551Z",
  //   __v: 0
  // }
  // {}
};
export default function TodoReducer(state = INITIAL_TODO_STATE, action) {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todo: [action.payload.message, ...state.todo] };
    case CREATE_TODO_ERROR:
      return { ...state, todoError: action.payload.message };
    case FETCH_ALL_TODO:
      const todoArray = [...state.todo, ...action.payload.message];
      // [...new Set(todoArray)];
      // console.log("todoArray: ", todoArray);

      // const filteredTodo = todoArray.filter(
      //   (item, index) => todoArray.indexOf(item) === index
      // {
      //   // console.log("index: ", index);
      //   // console.log("item: ", item);
      //   // console.log("todoArray.findIndex[item]: ", todoArray.indexOf(item));

      //   // return todoArray.indexOf(item) === index;
      // }
      // );
      // console.log("filteredTodo: ", filteredTodo);
      return {
        ...state,
        todo:
          // [...state.todo, ...action.payload.message] };
          // (item, index) => todosArray.findIndex(item) === index
          [
            ...new Set(
              todoArray.filter(
                todo => todo._id
                // === action.payload.message.map(todo => todo._id)
              )
            )
          ]

        // state.todo.concat(filteredTodo)
      };
    case FETCH_ALL_TODO_ERROR:
      return { ...state, todoError: action.payload.message };

    case VIEW_TODO_ISDONE:
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

    case EDITED_ACTIVITY_ERROR:
    case DONE_TODO_ERROR:
    case FETCH_ONE_TODO_ERROR:
    case VIEW_TODO_ISDONE_ERROR:
      return { ...state, todoError: action.payload.message };

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
    case DELETE_TODO_ERROR:
      return { ...state, todoError: action.payload.message };
    default:
      return state;
  }
}
