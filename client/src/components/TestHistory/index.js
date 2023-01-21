import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_HISTORY } from '../../utils/queries';

const TestHistory = () => {

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

  if (!historyOpen) {
		return (
			<div onClick={toggleHistory}>
				<span>
				  <strong>[click to see history]</strong>
				</span>
			</div>
		);
	}

  return (
    <div>
      <div onClick={toggleHistory}>
				<strong>[close]</strong>
			</div>
      <h2>history</h2>
      
      {historyState.length ? (
				<div>
					{historyState.map((item) => (
						<div key={item._id}>
              <p>{item.historyId + 1}. {item.guess.guessBody}</p>
              <p>{item.feedback.feedbackBody}</p>
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