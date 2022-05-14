import { ComposeState } from "./composeSlice";
import { createSelector, Selector } from "@reduxjs/toolkit";

import { RootState } from "../../../app/store";

export const mailSelector = (state: RootState): ComposeState => state.compose;

export const messageIsOpenSelector: Selector<RootState, boolean> = createSelector(mailSelector, (compose) => compose.sendMessageIsOpen);
