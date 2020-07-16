import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>Home Component</div>
      <button onClick={() => console.log('button pressed')}>Press Me</button>
    </div>
  );
}

export default { component: HomePage };