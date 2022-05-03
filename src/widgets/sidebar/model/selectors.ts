import { ComposeState } from "./composeSlice";
import { RootState } from "../../../app/store";
import { createSelector, Selector } from "@reduxjs/toolkit";

export const mailSelector = (state: RootState): ComposeState => state.mail;

export const messageIsOpenSelector: Selector<RootState, boolean> = createSelector(mailSelector, (mail) => mail.sendMessageIsOpen);
