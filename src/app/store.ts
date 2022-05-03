import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { composeSlice } from "../widgets";

const reducer = combineReducers({
    counter: counterSlice.reducer,
    mail: composeSlice.reducer,
});

export const store = configureStore({
    reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
