import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='p-5'>
      <h1 className='title is-1'>Welcome to Mastermind!</h1>

      <div class='subtitle'>You have 10 chances to guess the 4-digit number combo that computer is thinking. To restart the game, click on the 'clear history and restart game' button!</div>
    </div>
  );
}

export default Header;