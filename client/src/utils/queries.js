import { gql } from '@apollo/client';

export const QUERY_HISTORY = gql`
  query history {
    history {
      _id
      guess {
        guessBody
      }
      feedback {
        feedbackBody
      }
    }
  }
`;