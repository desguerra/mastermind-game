import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_HISTORY } from '../../utils/queries';

const History = () => {

  const { loading, data } = useQuery(QUERY_HISTORY);

  /* if data exists, store it in the history constant we 
  just created. if data is undefined, then save an empty 
  array to the history component */
  const history = data?.histories || [];

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
              {historyItem.historyId + 1}. {historyItem.historyId}
            </p>
            <p>
              {historyItem.historyId}
            </p>
          </div>
        )) : <p>No history yet</p>}
    </div>
  );
}

export default History;