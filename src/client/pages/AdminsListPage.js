import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => <li className="collection-item" key={admin.id}>{admin.name}</li>);
  }

  head() {
    return (
      <Helmet>
        <title>{`React SSR Admins (${this.props.admins.length})`}</title>
        <meta property="og:title" content="React SSR Admins" />
      </Helmet>
    )
  }


  render() {
    return (
      <div style={{ padding: '20px' }}>
        {this.head()}
        <ul className="collection with-header">
          <li className="collection-header"><h4>Private Admins List</h4></li>
          {this.renderAdmins()}
        </ul>
      </div >
    );
  }
}

const mapStateToProps = ({ admins }) => ({ admins });

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};