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
  type Answer {
    _id: ID
    answer: String
  }
  input GuessInput {
    _id: ID
    historyId: Int
    guessBody: String
  }
  input FeedbackInput {
    _id: ID
    historyId: Int
    feedbackBody: String
  }

  type Query {
    histories: [History]
    guesses(historyId: String): [Guess]
    feedbacks: [Feedback]
    answer: Answer
  }
  type Mutation {
    addHistory(historyId: Int!): History
    addGuess(historyId: Int!, guessBody: String!): Guess
    addFeedback(historyId: Int!, feedbackBody: String!): Feedback
  }
`;

// export the typeDefs
module.exports = typeDefs;