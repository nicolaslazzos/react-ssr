import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions';

class UsersListPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li className="collection-item" key={user.id}>{user.name}</li>);
  }

  head() {
    return (
      <Helmet>
        <title>{`React SSR Users (${this.props.users.length})`}</title>
        <meta property="og:title" content="React SSR Users" />
      </Helmet>
    )
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        {this.head()}
        <ul className="collection with-header">
          <li className="collection-header"><h4>Users List</h4></li>
          {this.renderUsers()}
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