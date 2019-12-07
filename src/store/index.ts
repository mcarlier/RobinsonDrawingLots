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
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// import { drawReducer } from "./draw/reducers";

// const rootReducer = combineReducers({
//   draw: drawReducer
// });

// export type AppState = ReturnType<typeof rootReducer>;

// export default function configureStore() {
//   const middlewares = [thunkMiddleware];
//   const middleWareEnhancer = applyMiddleware(...middlewares);

//   const store = createStore(
//     rootReducer,
//     composeWithDevTools(middleWareEnhancer)
//   );

//   return store;
// }