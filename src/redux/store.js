import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux";
import { AllReducer } from "./AllReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, Persistor } from "redux-persist";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";

// this page to save and persist the redux
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ListApiTodo"],
};
const persistReducers = persistReducer(persistConfig, AllReducer);
export const store = createStore(
  persistReducers,
  compose(applyMiddleware(thunk), devToolsEnhancer())
);
export const persistor = persistStore(store);
