import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const head = () => {
    return (
      <Helmet>
        <title>Welcome to React SSR!</title>
        <meta property="og:title" content="Welcome to React SSR!" />
      </Helmet>
    )
  }

  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      {head()}
      <h3>Welcome!</h3>
      <p>Check out this awesome React Server-Side Rendering example</p>
    </div>
  );
}

export default { component: HomePage };