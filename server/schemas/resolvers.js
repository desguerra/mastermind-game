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
  }
};

module.exports = resolvers;