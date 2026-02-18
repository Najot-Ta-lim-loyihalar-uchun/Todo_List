import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    setSearch: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
