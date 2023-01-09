import React from 'react';
import Guesses from '../components/Guesses';
import Game from '../components/Game';
import Feedback from '../components/Feedback';
import History from '../components/History';

const Home = () => {
	return (
		<div>
			<Guesses />

      <Game />

      <Feedback />

      <History />
		</div>
	);
};

export default Home;