import React from 'react';

const GuessesLeft = ({ guessesLeft }) => {
  return (
    <div>
      Number of guesses left:
      <span> {guessesLeft}</span>
    </div>
  );
}

export default GuessesLeft;