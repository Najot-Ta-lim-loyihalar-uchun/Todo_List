import { createSlice } from "@reduxjs/toolkit";

import { todoData } from "../../data/todoData";
import { toast } from "react-toastify";

const initialState = {
  todoes: todoData,
};

const todoesList = createSlice({
  name: "todoes",
  initialState,
  reducers: {
    deleteTodo: (state, { payload }) => {
      state.todoes = state.todoes.filter((item) => item.id !== payload);
      toast.success(`${payload} todo deleted`);
    },
    complateTodo: (state, { payload }) => {
      state.todoes = state.todoes.map((item) =>
        item.id === payload ? { ...item, completed: !item.completed } : item,
      );
    },
    updateTodo: (state, { payload }) => {
      state;
    },
    newTodo: (state, { payload }) => {
      state.todoes.push({
        id: state.todoes.length + 2,
        title: payload,
        completed: false,
      });
      toast.success(`"${payload}" todo added`);
    },
  },
});

export const { deleteTodo, complateTodo, updateTodo, newTodo } =
  todoesList.actions;
export default todoesList.reducer;
