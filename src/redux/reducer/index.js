import { combineReducers, configureStore,getDefaultMiddleware  } from "@reduxjs/toolkit"
import albums from "./albums";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const rootReducer = combineReducers({
  albums
}) // Все что ниже - это стор ;

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware];
const store = configureStore({
  reducer:persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(rootSaga);

export default store;