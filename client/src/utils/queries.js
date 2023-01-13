import { gql } from '@apollo/client';

export const QUERY_HISTORY = gql`
  query histories {
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