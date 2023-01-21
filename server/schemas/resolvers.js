const { History, Guess, Feedback } = require('../models');

const resolvers = {
  Query: {
    histories: async () => {
      return History.find()
        .populate('guess')
        .populate('feedback');
    },
    guesses: async (parent, { historyId }) => {
      const params = historyId ? { historyId } : {};
      return Guess.find(params);
    },
    feedbacks: async () => {
      return Feedback.find();
    }
  },
  Mutation: {
    addHistory: async (parent, args) => {
      const history = await History.create(args);
      return history;
    },
    addGuess: async (parent, args) => {
      const guess = await Guess.create(args);
    
      await History.findOneAndUpdate(
        { historyId: guess.historyId },
        { $set: { guess: guess._id } }
      );
    
      return guess;
    },
    addFeedback: async (parent, args) => {
      const feedback = await Feedback.create(args);
    
      await History.findOneAndUpdate(
        { historyId: feedback.historyId },
        { $set: { feedback: feedback._id } }
      );
    
      return feedback;
    },
    deleteHistory: async (parent, args) => {
      await History.deleteMany({});
      await Guess.deleteMany({});
      await Feedback.deleteMany({});
    },
  }
};

module.exports = resolvers;