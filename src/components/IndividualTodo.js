import React from "react";

import "./styles/IndividualTodo.css";

const IndividualTodo = props => {
  return (
    <div className="Individual_modal">
      <div className="Individual_modalContent todo_wrappers">
        <button className="closes">X</button>
        <div className="left_sides">
          <p className={props.value % 2 ? "done" : "not_done"}>
            {props.value % 2 ? "Todo Done" : "Todo in Progress"}
          </p>
          <p>
            Created: <br />
            25 mins ago
            {/* <button>View Todo</button> */}
          </p>
        </div>
        <div className="right_side">
          <p className="todo_buttons">
            <button>Delete</button>
            <button>Done</button>

            <button> Edit</button>
            <button className="close_btn"> Close</button>
          </p>
          <p className="todo_activity">
            Populated paths are no longer set to their original _id , their
            value is replaced with the mongoose document returned from the
            database by performing a separate query before returning the
            results. Arrays of refs work the same way. Just call the populate
            method on the query and an array of documents will be returned in
            place of the original _ids.
            {/* hi */}
            Populated paths are no longer set to their original _id , their
            value is replaced with the mongoose document returned from the
            database by performing a separate query before returning the
            results. Arrays of refs work the same way. Just call the populate
            method on the query and an array of documents will be returned in
            place of the original _ids.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualTodo;
