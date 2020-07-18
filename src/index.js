import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// we can use es6 syntax because all the files goes through webpack and babel

const app = express();

// this proxy is going to pass every request that begins with /api to the specified url
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
  // we initialize the store here because we want to get the data and load it into the store before we render
  const store = createStore(req);

  // we are trying to see what components need to be rendered, so we fetch the necessary data without rendering the app
  const promises = matchRoutes(Routes, req.path).map(({ route }) => route.loadData ? route.loadData(store) : null);

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) res.status(404);

    res.send(content);
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));