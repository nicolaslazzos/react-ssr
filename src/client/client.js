// startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

// we create a custom axios instance and pass it as an extra argument to all action creators through thunk, that way the action 
// creators are going to automatically make requests to the corresponding url depending there are in the server or in the client
const axiosInstance = axios.create({ baseURL: '/api' });

// we set to the client side store, the store that has all the data and was initialized in the server rendering
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

// this is gonna hydrate the html content previously rendered in the server and sent to the client
// it means that is not going to re render the content and replace it, its going to set the event
// handlers and all the necessary things to make work the app

// we use BrowserRouter because this handles the client side routing
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));