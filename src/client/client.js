// startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

// this is gonna hydrate the html content previously rendered in the server and sent to the client
// it means that is not going to re render the content and replace it, its going to set the event
// handlers and all the necessary things to make work the app

// we use BrowserRouter because this handles the client side routing
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));