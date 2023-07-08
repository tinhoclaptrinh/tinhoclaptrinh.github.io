import React from 'react';
import ReactDOM from 'react-dom/client';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// styles
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// components
import AppContainer from './AppContainer';

import myReducer from './reducers/index';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <AppContainer />

    <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme='light'
    />
  </Provider>
);
