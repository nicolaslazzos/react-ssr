import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
      <a href="/api/auth/google">Login</a>
    );

  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-1">
        <Link to='/' className="brand-logo left" style={{ paddingRight: '15px', paddingLeft: '15px' }}>React SSR</Link>
        <ul className="right">
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/admins'>Admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);