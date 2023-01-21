import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Welcome to Mastermind!</h1>

      <div class='description'>You have 10 chances to guess what the computer is thinking. To restart the game, click on the 'clear history and restart game' button!</div>
    </div>
  );
}

export default Header;