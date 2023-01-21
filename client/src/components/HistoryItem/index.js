import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_HISTORY_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

const HistoryItem = ({ history }) => {
  const [, dispatch] = useStoreContext();

  const onChange = (e) => {
    const value = e.target.value;
  
      dispatch({
        type: UPDATE_HISTORY_QUANTITY,
        _id: history._id,
        purchaseQuantity: parseInt(value)
      });
    
      idbPromise('history', 'put', { ...history, guessBody: value });
  };
    
  return (

    <div>
      <p>{history.historyId} - - ${history.guess}</p>
    </div>
  );
}

export default HistoryItem;