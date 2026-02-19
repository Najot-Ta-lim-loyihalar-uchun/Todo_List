import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  value: "",
  open: false,
};

const modalPortSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalPort: (state, { payload }) => {
      console.log(payload);

      state.value = payload.value;
      state.open = payload.open;
      state.id = payload.id;
    },
  },
});

export const { modalPort } = modalPortSlice.actions;
export default modalPortSlice.reducer;
