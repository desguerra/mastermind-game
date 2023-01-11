import React from 'react';

const Game = ({ decrementNumGuess, handleGameFormChange }) => {

  /* SUBMIT FORM */
  const handleFormSubmit = async event => {
    event.preventDefault();

  };

  return (
    <div>
      <div>
        Guess the number combination!
      </div>

      <form onSubmit={handleFormSubmit}>
        <input type='text' id='guess-1' name='guess-1' maxLength={1} minLength={0} size='1' onChange={handleGameFormChange} value={handleGameFormChange.guess1} autoFocus />
        <input type='text' id='guess-2' name='guess-2' maxLength={1} minLength={0} size='1' onChange={handleGameFormChange} value={handleGameFormChange.guess2} />
        <input type='text' id='guess-3' name='guess-3' maxLength={1} minLength={0} size='1' onChange={handleGameFormChange} value={handleGameFormChange.guess3} />
        <input type='text' id='guess-4' name='guess-4' maxLength={1} minLength={0} size='1' onChange={handleGameFormChange} value={handleGameFormChange.guess4} />

        <button type='button' onClick={decrementNumGuess}>guess!</button>
      </form>
    </div>

  );
}

export default Game;