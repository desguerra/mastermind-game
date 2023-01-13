import { gql } from '@apollo/client';

export const QUERY_HISTORY = gql`
  query histories {
    histories {
      _id
      historyId
      guess {
        _id
        historyId
        guessBody
      }
      feedback {
        _id
        historyId
        feedbackBody
      }
    }
  }
`;