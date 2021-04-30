import React, { useState } from "react";
import "./input.css";

function Input() {
  const [input, setinput] = useState("");
  const addTodo = () => {};
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onclick={addTodo}>Add‍</button>
    </div>
  );
}

export default Input;
