import { combineReducers, configureStore,getDefaultMiddleware  } from "@reduxjs/toolkit"
import albums from "./albums";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const rootReducer = combineReducers({
  albums
})
let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer:rootReducer,
  middleware
})
sagaMiddleware.run(rootSaga);

export default store;