import { createSlice } from "@reduxjs/toolkit";

const get_Initial_mode = () => {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "light";
};

const initialState = {
  mode: get_Initial_mode(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
