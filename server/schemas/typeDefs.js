// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type HistoryItems {
    _id: ID
    guess: [Guess]
    feedback: [Feedback]
  }
  type Guess {
    _id: ID
    guessBody: String
  }
  type Feedback {
    _id: ID
    feedbackBody: String
  }
  type Query {
    history: [HistoryItems]
  }
`;

// export the typeDefs
module.exports = typeDefs;