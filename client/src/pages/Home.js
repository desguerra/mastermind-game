import React, { useState } from 'react';
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

	return (
		<div>

      <GuessesLeft guessesLeft={guessesLeft}/>

      <Game decrementNumGuess={decrementNumGuess}/>

      <Feedback />

      <History />
		</div>
	);
};

export default Home;