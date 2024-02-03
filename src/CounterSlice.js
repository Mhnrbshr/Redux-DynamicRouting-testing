import { createSlice } from "@reduxjs/toolkit";
//redux to maintain dfrnt states
//counter slice container initial values and functns
const counter = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      //prvs value is inside state
      return { value: state.value + 1 };
    },
    decrement(state, action) {
      //prvs value is inside state
      return { value: state.value - 1 };
    },
  },
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;
//export reducer to get current and prev state.And to config store
