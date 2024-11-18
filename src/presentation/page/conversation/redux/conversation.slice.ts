import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ConversationEntity } from "../../../../domain/entity/conversation.entity";
import { roomRepository } from "../../../../data/repository";

type ConversationReduxType = {
  conversationList: ConversationEntity[];
  conversationSelected: string | null;
  reloadConversationList: boolean;
};

const initialState: ConversationReduxType = {
  conversationList: [],
  conversationSelected: null,
  reloadConversationList: true,
};

export const getConversationListThunk = createAsyncThunk(
  "conversation/getConversationList",
  async (userId: number, thunkAPI) => {
    try {
      const state = (thunkAPI.getState() as any)
        .conversation as ConversationReduxType;
      const data = await roomRepository.getRoomList(userId);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Loading failed");
    }
  }
);

const conversationSlice = createSlice({
  name: "slice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConversationListThunk.fulfilled, (state, action) => {
      state.conversationList = action.payload;
    });
  },
});

export default conversationSlice.reducer;
