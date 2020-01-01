export default function(state = { todo: "" }, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return action.payload;
    default:
      return state;
  }
}
