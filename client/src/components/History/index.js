import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_HISTORY } from '../../utils/queries';

const History = () => {

  const { loading, data } = useQuery(QUERY_HISTORY);

  /* if data exists, store it in the history constant we 
  just created. if data is undefined, then save an empty 
  array to the history component */
  const history = data?.histories || [];
  console.log(history);

  if (!history.length) {
    return <div>
    <h2>history</h2>
    <p>No history yet</p>
    </div>;
  }

  return (
    <div>
      <h2>history</h2>
      {history ?
        history.map(historyItem => (
          <div>
            <p>
              {historyItem.historyId + 1}. {historyItem.guess.guessBody}
            </p>
            <p>
              {historyItem.feedback.feedbackBody}
            </p>
          </div>
        )) : <p>No history yet</p>}
    </div>
  );
}

export default History;