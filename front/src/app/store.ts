import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basketReducer";

const store = configureStore({
  reducer: {
    basketReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
