import React, { useEffect, useState } from 'react';

const Feedback = () => {

  /* FIXME: conditionally render feedback once user guesses */
  const guessed = true;

  const [computerGuess, setComputerGuess] = useState([]);

  const fetchData = () => {
    return fetch('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new')
      .then((response) => response.text())
      .then((data) => setComputerGuess(data.replace(/\s/g,'')));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      {guessed &&
        <p>You guessed: <span id='feedbackGuess'></span> - given feedback</p>
      }
      <p>Correct answer: {computerGuess}</p>
    </div>
  );
}

export default Feedback;