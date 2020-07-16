// startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

// this is gonna hydrate the html content previously rendered in the server and sent to the client
// it means that is not going to re render the content and replace it, its going to set the event
// handlers and all the necessary things to make work the app

// we use BrowserRouter because this handles the client side routing
ReactDOM.hydrate(<BrowserRouter><Routes /></BrowserRouter>, document.querySelector('#root'));