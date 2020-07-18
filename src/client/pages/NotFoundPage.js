import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <div className="center-align" style={{ marginTop: '180px', padding: '20px' }}>
      <h3>Page Not Found</h3>
      <p>Sorry, the page you requested was not found</p>
    </div>
  );
}

export default { component: NotFoundPage };