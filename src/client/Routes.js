import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    loadData,
    path: '/users',
    exact: true,
    component: UsersList
  }
];