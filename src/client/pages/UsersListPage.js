import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersListPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <ul className="collection with-header">
          <li className="collection-header"><h4>Users List</h4></li>
          {this.props.users.map(user => <li className="collection-item" key={user.id}>{user.name}</li>)}
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