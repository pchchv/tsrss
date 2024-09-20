import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { saveState, loadState } from "@/redux/localStorage";
import feedReducer from "@/redux/feedSlice";
import uiReducer from "@/redux/uiSlice";

const persistedState = loadState();

const rootReducer = combineReducers({
  feed: feedReducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
