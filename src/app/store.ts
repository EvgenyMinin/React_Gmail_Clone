import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";
import { toggleSendMessageReducer, selectMailReducer, emailListReducer } from "../widgets";

const reducer = combineReducers({
    counter: counterReducer,
    compose: toggleSendMessageReducer,
    emailList: emailListReducer,
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
