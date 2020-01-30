import React from "react";
import "./styles/ExplainTodo.css";
const ExplainTodo = () => {
  return (
    <div className="Explain_section">
      <h2>Stop Manual Record</h2>
      <p>
        Our app tends to reduce the rate at which manual records are kept and
        bulky books being carried along
      </p>
      <div className="Explain_section_images">
        <div className="Explain_section_img img1">
          {/* <img
            src="images/tasks-4026398_1280.jpg"
            alt="a list of papers with one pinned to the wall and written on it is TODO"
          /> */}
        </div>
        <div className="Explain_section_img img2">
          {/* <img
            src="images/checklist-1266989.svg"
            alt="A man thinking in front a book, pen and tea"
          /> */}
        </div>
        <div className="Explain_section_img img3">
          {/* <img
            src="images/todo-list-297195.svg"
            alt="A Man holding a list of bill"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ExplainTodo;
