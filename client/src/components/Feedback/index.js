import React from 'react';

const Feedback = () => {

  /* FIXME: conditionally render feedback once user guesses */
  const guessed = true;

  return (
    <div>
      {guessed &&
        <p>given feedback</p>
      }
    </div>
  );
}

export default Feedback;