import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// we can use es6 syntax because all the files goes through webpack and babel

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  // we initialize the store here because we want to get the data and load it into the store before we render
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(3000, () => console.log('Listening on port 3000'));