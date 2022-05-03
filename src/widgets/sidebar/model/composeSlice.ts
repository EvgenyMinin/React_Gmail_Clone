import { createSlice } from "@reduxjs/toolkit";

export type ComposeState = {
    sendMessageIsOpen: boolean;
};

const initialState: ComposeState = {
    sendMessageIsOpen: false,
};

export const composeSlice = createSlice({
    name: "compose-slice",
    initialState,
    reducers: {
        openSendMessage(state) {
            state.sendMessageIsOpen = true;
        },

        closeSendMessage(state) {
            state.sendMessageIsOpen = false;
        },
    },
});

export const { openSendMessage, closeSendMessage } = composeSlice.actions;

export const toggleSendMessageReducer = composeSlice.reducer;
