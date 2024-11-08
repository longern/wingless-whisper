import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts";
import messagesReducer from "./messages";

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
