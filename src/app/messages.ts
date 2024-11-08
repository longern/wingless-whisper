import { createSlice } from "@reduxjs/toolkit";

export interface Message {
  content: {
    body: string;
  };
  sender: string;
}

const initialState = {
  messages: [] as Message[],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
