import { configureStore } from "@reduxjs/toolkit";

/* rdxs */
import themeReducer from "./features/themeToggleSlice";
import todoesReducer from "./features/todoesSlice";
import searchReducer from "./features/searchedSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todoesReducer,
    search: searchReducer,
  },
});
