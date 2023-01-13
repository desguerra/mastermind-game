import { gql } from '@apollo/client';

export const ADD_HISTORY = gql`
  mutation addHistory($historyId: Int!) {
    addHistory(historyId: $historyId) {
      _id
      historyId
    }
  }
`;

export const ADD_GUESS = gql`
  mutation addGuess($historyId: Int!, $guessBody: String!) {
    addGuess(historyId: $historyId, guessBody: $guessBody) {
      _id
      historyId
      guessBody
    }
  }
`;

export const ADD_FEEDBACK = gql`
  mutation addFeedback($historyId: Int!, $feedbackBody: String!) {
    addFeedback(historyId: $historyId, feedbackBody: $feedbackBody) {
      _id
      historyId
      feedbackBody
    }
  }
`;