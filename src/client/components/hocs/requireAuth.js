import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  class RequireAuth extends React.Component {
    render() {
      switch (this.props.auth) {
        case null:
          return (
            <div className="center-align" style={{ marginTop: '200px' }}>
              <h3>Loading...</h3>
            </div>
          );
        case false:
          return <Redirect to="/" />;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(RequireAuth);
}