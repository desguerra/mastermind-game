import React, { createContext, useContext } from 'react';
import { useItemReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useItemReducer({
        guesses: [],
        feedbacks: [],
        history: [],
        historyOpen: false
    });
    console.log(state);
    return <Provider value={[state, dispatch]} { ...props} />;

};
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext};