import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log(auth);

  const authButton = auth ? (
    <a href="/api/logout"> Logout</a>
  ) : (
      <a href="/api/auth/google"> Login</a>
    );

  return (
    <div>
      <Link to='/'>REACT-SSR</Link>
      <div>
        <Link to='/users'> Users List</Link>
        <Link to='/admins'> Admins List</Link>
        {authButton}
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);