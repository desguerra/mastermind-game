import React, { useState } from 'react';
import Header from '../components/Header';
import Game from '../components/Game';
import GuessesLeft from '../components/GuessesLeft';
import Feedback from '../components/Feedback';
import History from '../components/History';

const Home = () => {

  /* DECREMENT NUMBER OF GUESSES */
  const [guessesLeft, setGuessesLeft] = useState(10)
  const decrementNumGuess = () => {
    if (guessesLeft > 0) {
      setGuessesLeft(guessesLeft => guessesLeft - 1);
    }
  }

  /* GAME FORM STATE */
  const [gameFormState, setGameFormState] = useState({ 'guess-1': '', 'guess-2': '', 'guess-3': '', 'guess-4': '' });

  // update state based on form input changes
  const handleGameFormChange = (event) => {
    const { maxLength, name, value } = event.target;

    setGameFormState({
      ...gameFormState,
      [name]: value,
    });

    const numFields = 4;
    const [fieldName, fieldIndex] = name.split('-');

    // parseInt parses a string argument and returns the integer
    let fieldIntIndex = parseInt(fieldIndex, 10);

    // if value length is greater than max char length
    if (value.length >= maxLength) {
      // if not last input field
      if (fieldIntIndex < numFields) {
        const nextField = document.querySelector(
          `input[name=guess-${fieldIntIndex + 1}]`
        );

        // if next field exists, focus next field
        if (nextField !== null) {
          nextField.focus();
        }
      }
    }
  };

	return (
		<div>
      <Header />

      <GuessesLeft guessesLeft={guessesLeft} />

      <Game decrementNumGuess={decrementNumGuess} handleGameFormChange={handleGameFormChange} />

      <Feedback />

      <History />
		</div>
	);
};

export default Home;