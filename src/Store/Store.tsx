import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import storeReducer from "./StoreReducer";

const rootStore = combineReducers({chatStore: storeReducer});

export const store = createStore(rootStore, composeWithDevTools());