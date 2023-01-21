import React, { useEffect, useState } from 'react';
import { pluralize } from '../../utils/helpers';

const Feedback = ( { userGuess } ) => {

  const [computerGuess, setComputerGuess] = useState([]);
  let feedback = '';

  const fetchData = () => {
    return fetch('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new')
      .then((response) => response.text())
      .then((data) => setComputerGuess(data.replace(/\s/g,'')));
  }

  useEffect(() => {
    fetchData();
  },[])

  if (userGuess === '') {
    feedback = '';
  } else if (computerGuess === userGuess) {
    feedback = 'You are correct! Great job! Refresh the page to play again.';
  } else {
    let number = 0;
    let location = 0;

    let comparision = (computerGuess.match(new RegExp('[' + userGuess + ']', 'g')) || []).join('');


    for (let i=0; i < computerGuess.length; i++) {
      if (computerGuess[i] === userGuess[i]) {
        location++;
      }
      number = comparision.length;
    }

    if (number === 0 && location === 0) {
      feedback = 'All incorrect.';
    } else {
      feedback = `${number} correct ${pluralize('number', number)} and ${location} correct ${pluralize('location', location)}`;
    }
  }

  return (
    <div>
      {/* <p>User guessed: {userGuess}</p>
      <p>Correct answer: {computerGuess}</p> */}


      <p>{feedback}</p>
    </div>
  );
}

export default Feedback;