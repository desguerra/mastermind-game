import React from 'react';

const Game = ({ decrementNumGuess, handleGameFormChange, handleFormSubmit }) => {

  return (
    <div>
      <div>
        Guess the number combination!
      </div>

      <form onSubmit={handleFormSubmit}>
        <input type='text' id='guess' name='guessBody' maxLength={4} minLength={0} size='4' onChange={handleGameFormChange} value={handleGameFormChange.guessBody} autoFocus />

        <button type='submit' onClick={decrementNumGuess}>guess!</button>
      </form>
    </div>

  );
}

export default Game;