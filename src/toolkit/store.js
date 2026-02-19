import { configureStore } from "@reduxjs/toolkit";

/* rdxs */
import themeReducer from "./features/themeToggleSlice";
import todoesReducer from "./features/todoesSlice";
import searchReducer from "./features/searchedSlice";
import modalReducer from "./features/modalPort";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todoesReducer,
    search: searchReducer,
    modal: modalReducer,
  },
});
