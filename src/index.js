import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './redux/reducer';
import { BrowserRouter } from "react-router-dom";
import {  Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
