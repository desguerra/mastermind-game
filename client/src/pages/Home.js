import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Game from '../components/Game';
import GuessesLeft from '../components/GuessesLeft';
import Feedback from '../components/Feedback';
import TestHistory from '../components/TestHistory';

import { useMutation } from '@apollo/client';
import { ADD_HISTORY, ADD_GUESS, ADD_FEEDBACK } from '../utils/mutations';

const Home = () => {

  /* DECREMENT NUMBER OF GUESSES */
  const [guessesLeft, setGuessesLeft] = useState(10)
  const [idVar, setIdVar] = useState(0)
  
  const decrementNumGuess = () => {
    if (guessesLeft > 0) {
      setGuessesLeft(guessesLeft => guessesLeft - 1);
    }
    if (idVar < 10) {
      setIdVar(idVar => idVar + 1);
    }

    //const guessBodyId = document.getElementById('guessBody');

    //const feedbackGuessId = document.getElementById('feedbackGuess');
    //feedbackGuessId.textContent = guessBodyId.value;

    //guessBodyId.value = '';
  }

  /* GAME FORM STATE */
  const [historyFormState, setHistoryFormState] = useState({ historyId: 0 });
  const [gameFormState, setGameFormState] = useState({ guessBody: '', historyId: idVar });
  const [feedbackFormState, setFeedbackFormState] = useState({ feedbackBody: '', historyId: idVar });

  const [addHistory, { errorHistory }] = useMutation(ADD_HISTORY);
  const [addGuess, { errorGuess }] = useMutation(ADD_GUESS);
  const [addFeedback, { errorFeedback }] = useMutation(ADD_FEEDBACK);

  const [userGuess, setUserGuess] = useState('');

  // update state based on form input changes
  const handleGameFormChange = (event) => {
    const { name, value } = event.target;

    setHistoryFormState({
      ...historyFormState,
      historyId: idVar,
    });

    setGameFormState({
      ...gameFormState,
      [name]: value,
    });

    setFeedbackFormState({
      ...feedbackFormState,
      historyId: idVar, feedbackBody: 'guess feedback goes here'
    });
  };

  /* SUBMIT GAME FORM */
  const handleFormSubmit = async event => {
    event.preventDefault();

    // console.log(gameFormState);

    setUserGuess(gameFormState.guessBody);

    // use try/catch instead of promises to handle errors
    try {
      await addHistory({
        variables: { ...historyFormState }
      });
      await addGuess({
        variables: { ...gameFormState }
      });
      await addFeedback({
        variables: { ...feedbackFormState }
      });

    } catch (e) {
      console.error(e);
    }
  };

	return (
		<div className='container'>
      <Header />

      <GuessesLeft guessesLeft={guessesLeft} />

      <Game decrementNumGuess={decrementNumGuess} handleGameFormChange={handleGameFormChange} handleFormSubmit={handleFormSubmit} />

      <Feedback userGuess={userGuess} />

      <TestHistory />
		</div>
	);
};

export default Home;