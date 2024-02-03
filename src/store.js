import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice"; //default ai ./counterslicnn export chytha ellam CounterSlicil varum.

const store = configureStore({
  reducer: {
    count : CounterSlice, //counterslice default export aayond whatever name can be used
  },
});

export default store;
