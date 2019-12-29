import React from "react";
import "./styles/TodoItem.css";
// activity: {
//   type: String,
//   required: true,
//   trim: true,
//   minlength: 5,
// },
// CreatedAt: {
//   type: Date,
//   default: new Date()
// },
// isDone: {
//   type: Boolean,
//   required: true,
//   default: false,
// },
// isDoneDate: {
//   type: Date,
//   default: null,
// },
// creator: {
//   type: mongoose.Schema.Types.ObjectId,
//   required: true,
//   trim: true,
// },
// isDeleted: {
//   type: Boolean,
//   default: false
// },
// durationCreatedAt:{
//   type: String,
//   default: null,
// },
// durationDoneAt:{
//   type: String,
//   default: null,
// }

const TodoItem = props => {
  return (
    <div className="todo_wrapper">
      <div className="left_side">
        <p className={props.value % 2 ? "done" : "not_done"}>
          {props.value % 2 ? "Todo Done" : "Todo in Progress"}
        </p>
        <p>
          Created: <br />
          25 mins ago
          <button>View Todo</button>
        </p>
      </div>
      <div className="right_side">
        <p className="todo_buttons">
          <button>Delete</button>
          <button>Done</button>

          <button> Edit</button>
        </p>
        <p className="todo_activity">
          Populated paths are no longer set to their original _id , their value
          is replaced with the mongoose document returned from the database by
          performing a separate query before returning the results. Arrays of
          refs work the same way. Just call the populate method on the query and
          an array of documents will be returned in place of the original _ids.
          {/* hi */}
          Populated paths are no longer set to their original _id , their value
          is replaced with the mongoose document returned from the database by
          performing a separate query before returning the results. Arrays of
          refs work the same way. Just call the populate method on the query and
          an array of documents will be returned in place of the original _ids.
        </p>
      </div>
    </div>
  );
};
export default TodoItem;
