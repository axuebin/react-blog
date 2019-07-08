import React, { useState } from 'react';
import './index.scss';

function Header() {
  const [count, setCount] = useState(0);
  return (
    <div className="header">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Header;
