import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedEmail } from "../../../shared";

export type SelectedEmailState = {
    mail: SelectedEmail;
};

const initialState: SelectedEmailState = {
    mail: {
        title: "",
        subject: "",
        description: "",
        date: "",
    },
};

export const selectedMailSlice = createSlice({
    name: "selected-mail-slice",
    initialState,
    reducers: {
        setMail(state, { payload }: PayloadAction<SelectedEmail>) {
            state.mail = payload;
        },
    },
});

export const { setMail } = selectedMailSlice.actions;
export const selectMailReducer = selectedMailSlice.reducer;
