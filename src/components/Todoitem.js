import React from "react";
import "./input.css";
import { useDispatch } from "react-redux";

import { DeleteTodo } from "../features/todoSlice";
function Todoitem({ name, done, id }) {
  const dispatch = useDispatch();
  const handelDone = () => {
    dispatch(DeleteTodo(id));
  };
  return (
    <div className="todo_item">
      <div className="container_pro">
        <p>{name}</p>
        <div className="controls">
          <p>{id}</p>
          <button onClick={handelDone}>Done</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
