import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Home Component</div>
      <button onClick={() => console.log('button pressed')}>Press Me</button>
    </div>
  );
}

export default Home;