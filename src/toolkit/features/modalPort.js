import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  open: false,
};

const modalPortSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalPort: (state, { payload }) => {
      state.value = payload.value;
      state.open = payload.open;
    },
  },
});

export const { modalPort } = modalPortSlice.actions;
export default modalPortSlice.reducer;
