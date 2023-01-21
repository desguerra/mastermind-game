import React from 'react';

const GuessesLeft = ({ guessesLeft }) => {
  return (
    <div>
      <strong>
        Number of guesses left:
        <span className='has-text-link'> {guessesLeft}</span>
      </strong>
    </div>
  );
}

export default GuessesLeft;