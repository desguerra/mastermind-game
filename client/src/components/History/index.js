import React, { useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';
import { QUERY_HISTORY } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import HistoryItem from '../HistoryItem';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_HISTORY, ADD_MULTIPLE_TO_HISTORY } from '../../utils/actions';

const History = () => {

  const [state, dispatch] = useStoreContext();
	const [getHistory, { data }] = useLazyQuery(QUERY_HISTORY);

  useEffect(() => {
		async function getList() {
			const history = await idbPromise('history', 'get');
			dispatch({ type: ADD_MULTIPLE_TO_HISTORY, guesses: [...history] });
		}

		if (!state.history.length) {
			getList();
		}
	}, [state.history.length, dispatch]);

  function toggleHistory() {
		dispatch({ type: TOGGLE_HISTORY });
	}

  if (!state.historyOpen) {
		return (
			<div onClick={toggleHistory}>
				<span>
					history
				</span>
			</div>
		);
	}

  return (
    <div>
      <div onClick={toggleHistory}>
				[close]
			</div>
      <h2>history</h2>
      
      {state.history.length ? (
				<div>
					{state.history.map((item) => (
						<HistoryItem key={item._id} item={item} />
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

export default History;