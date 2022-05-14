import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";
import { emailListSlice } from "../pages";
import { toggleSendMessageReducer, selectMailReducer } from "../widgets";

const reducer = combineReducers({
    counter: counterReducer,
    compose: toggleSendMessageReducer,
    emailList: emailListSlice.emailListReducer,
    selectedEmail: selectMailReducer,
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
