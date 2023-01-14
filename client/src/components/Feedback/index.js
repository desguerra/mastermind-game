import React from 'react';

const Feedback = ({ gameFormState }) => {

  /* FIXME: conditionally render feedback once user guesses */
  const guessed = true;

  return (
    <div>
      {guessed &&
        <p>You guessed: <span id='feedbackGuess'></span> - given feedback</p>
      }
    </div>
  );
}

export default Feedback;