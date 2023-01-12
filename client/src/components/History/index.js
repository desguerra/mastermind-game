import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_HISTORY } from '../../utils/queries';

const History = () => {

  const { loading, data } = useQuery(QUERY_HISTORY);

  /* if data exists, store it in the history constant we 
  just created. if data is undefined, then save an empty 
  array to the history component */
  const history = data?.history || [];
  console.log(history);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default History;