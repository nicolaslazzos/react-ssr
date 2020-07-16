// startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// this is gonna hydrate the html content previously rendered in the server and sent to the client
// it means that is not going to re render the content and replace it, its going to set the event
// handlers and all the necessary things to make work the app
ReactDOM.hydrate(<Home />, document.querySelector('#root'));