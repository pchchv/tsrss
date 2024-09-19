import { combineReducers } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import uiReducer from "./uiSlice";

const rootReducer = combineReducers({
    feed: feedReducer,
    ui: uiReducer
})
