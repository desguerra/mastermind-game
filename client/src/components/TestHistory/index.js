import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import { useQuery } from '@apollo/client';
import { QUERY_HISTORY } from '../../utils/queries';
import { DELETE_HISTORY } from '../../utils/mutations';

const TestHistory = () => {

  const [deleteHistory, { errorHistory }] = useMutation(DELETE_HISTORY);

  let [historyOpen, setHistoryOpen] = useState(false);
  const {loading, data } = useQuery(QUERY_HISTORY);

  const history = data?.histories || [];
  const [historyState, setHistoryState] = useState([]);

  console.log(history);
  console.log(historyState);

  useEffect(() => {
		async function getHistory() {
      setHistoryState(history);
		}

		if (!historyState.length) {
			getHistory();
		}
	});

  function toggleHistory() {
		historyOpen = setHistoryOpen(!historyOpen);
	}

  function clearHistory() {
		deleteHistory();
    window.location.reload(false);
	}

  if (!historyOpen) {
		return (
      <>
        <div>
          <button onClick={clearHistory}>clear history and restart game</button>
        </div>
        <div onClick={toggleHistory}>
          <span>
            <strong>[click to see history]</strong>
          </span>
        </div>
      </>
		);
	}

  return (
    <div>
      <div>
        <button onClick={clearHistory}>clear history and restart game</button>
      </div>
      <div onClick={toggleHistory}>
				<strong>[close]</strong>
			</div>
      <h2>history</h2>
      
      {historyState.length ? (
				<div>
					{historyState.map((item) => (
						<div key={item._id}>
              <p>{item.historyId + 1}. You guessed <strong>{item.guess.guessBody.length ? item.guess.guessBody : <span>user guess</span>}</strong></p>
              <p><strong><i>{item.feedback.feedbackBody.length ? item.feedback.feedbackBody : <span>game feedback</span>}</i></strong></p>
            </div>
					))}
          <div>

          </div>
        </div>
			) : (
				<h3>
					<span role="img" aria-label="shocked">
						😱
					</span>
					You haven't made any guesses yet!
				</h3>
			)}


    </div>
  );
}

export default TestHistory;