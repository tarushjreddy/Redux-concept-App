import React, { useState } from "react";
import "./input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
function Input() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    console.log(input);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  const addTodo1 = () => {
    console.log("hello", input);
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
          console.log(input);
        }}
      />
      <button type="submit" onClick={addTodo}>
        Add‍
      </button>
    </div>
  );
}

export default Input;
