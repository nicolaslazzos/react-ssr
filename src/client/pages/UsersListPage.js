import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersListPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <div>Users List</div>
        <ul>
          {this.props.users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div >
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData: ({ dispatch }) => dispatch(fetchUsers())
};