import { combineReducers, configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import uiReducer from "./uiSlice";
import { loadState } from "./localStorage"

const persistedState = loadState()

const rootReducer = combineReducers({
    feed: feedReducer,
    ui: uiReducer
})

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState
})
