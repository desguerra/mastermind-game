import React from 'react';

const Game = ({ decrementNumGuess, handleGameFormChange, handleFormSubmit }) => {

  return (
    <>
      <section>
        <div>
          Guess the 4-digit number combination!
        </div>

        <form className='center p-1' onSubmit={handleFormSubmit}>
          <div className='field'>
            <div className='control'>
              <input type='text' placeholder='0000' id='guessBody' name='guessBody' maxLength={4} minLength={0} size='4' onChange={handleGameFormChange} value={handleGameFormChange.guessBody} autoFocus />
            </div>

          </div>
          <div className='field'>
            <div className='control'>
              <button className='button is-primary' type='submit' onClick={decrementNumGuess}>guess!</button>
            </div>
          </div>
          
        </form>
      </section>
    </>

  );
}

export default Game;