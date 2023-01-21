import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>welcome to mastermind!</h1>

      <nav>
        <ul><Link to='/'>home</Link></ul>
      </nav>
    </div>
  );
}

export default Header;