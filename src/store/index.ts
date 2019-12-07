import { createStore, combineReducers } from "redux";
import { drawReducer } from "./draw/reducers";

const rootReducer = combineReducers({
  draw: drawReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}