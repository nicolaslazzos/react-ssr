import express from 'express';
import renderer from './helpers/renderer';

// we can use es6 syntax because all the files goes through webpack and babel

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => console.log('Listening on port 3000'));