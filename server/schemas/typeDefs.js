// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type History {
    _id: ID
    historyId: Int
    guess: Guess
    feedback: Feedback
  }
  type Guess {
    _id: ID
    historyId: Int
    guessBody: String
  }
  type Feedback {
    _id: ID
    historyId: Int
    feedbackBody: String
  }
  type Query {
    histories: [History]
    guesses(historyId: String): [Guess]
    feedbacks: [Feedback]
  }
`;

// export the typeDefs
module.exports = typeDefs;