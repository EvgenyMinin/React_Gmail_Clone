import { createSlice } from "@reduxjs/toolkit";
import { Email } from "../../../shared";

export type EmailListState = {
    emailList: Email[];
};

const initialState: EmailListState = {
    emailList: [],
};

const emailListSlice = createSlice({
    name: "emailList",
    initialState,

    reducers: {
        setEmailList(_state, { payload }) {
            return { ...payload };
        },
    },
});

export const emailListSliceActions = emailListSlice.actions;

export const emailListReducer = emailListSlice.reducer;
