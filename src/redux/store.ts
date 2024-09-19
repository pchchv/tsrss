import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { saveState, loadState } from "./localStorage"
import feedReducer from "./feedSlice";
import uiReducer from "./uiSlice";

const persistedState = loadState()

const rootReducer = combineReducers({
    feed: feedReducer,
    ui: uiReducer
})

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState
})

store.subscribe(() => {
    saveState(store.getState())
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
