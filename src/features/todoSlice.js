import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    DeleteTodo: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
            state.todoList.pop(action.payload);
            console.log(item.done);
          } else {
            item.done = true;
            console.log("this is part");
            console.log(action.payload);
            console.log(item.id);
            state.todoList.pop(action.payload);
          }
        }
      });
    },
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { saveTodo, DeleteTodo } = todoSlice.actions;
export const selectTodolist = (state) => state.todos.todoList;
export default todoSlice.reducer;
