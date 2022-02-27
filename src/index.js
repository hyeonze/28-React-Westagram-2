import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
