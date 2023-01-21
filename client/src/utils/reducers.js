import { useReducer } from 'react';
import {
    ADD_TO_HISTORY,
    UPDATE_HISTORY_QUANTITY,
    CLEAR_HISTORY,
    TOGGLE_HISTORY,
    ADD_MULTIPLE_TO_HISTORY
  } from './actions';
  
    
    export const reducer = (state, action) => {
      switch (action.type) {
        
          case ADD_TO_HISTORY:
          return {
            ...state,
            historyOpen: true,
            history: [...state.history, action.guess]
          };

          case ADD_MULTIPLE_TO_HISTORY:
          return {
            ...state,
            history: [...state.history, ...action.guesses],
          };

          case UPDATE_HISTORY_QUANTITY:
          return {
            ...state,
            historyOpen: true,
            history: state.history.map(guess => {
              if (action._id === guess._id) {
                guess.guessBody = action.guessBody;
              }
              return guess;
            })
          };

          case CLEAR_HISTORY:
          return {
            ...state,
            historyOpen: false,
            history: []
          };
          
          case TOGGLE_HISTORY:
          return {
            ...state,
            historyOpen: !state.historyOpen
          };
    
        // if it's none of these actions, do not update state at all and keep things the same!
        default:
          return state;
      }
    };

export function useItemReducer(initialState) {
    return useReducer(reducer, initialState);
  }