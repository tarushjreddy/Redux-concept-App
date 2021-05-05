import React from "react";

import "./App.css";
import Input from "./components/input";
import Todoitem from "./components/Todoitem";
import { useSelector } from "react-redux";
import { selectTodolist } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodolist);
  console.log(todoList);

  return (
    <div>
      <div className="App">
        <Input />
      </div>
      <div>
        {todoList.map((posts) => (
          <Todoitem name={posts.item} id={posts.id} done={posts.done} />
        ))}
      </div>
    </div>
  );
}

export default App;
