const { History } = require('../models');

const resolvers = {
  Query: {
    history: () => {
      return History.find();
    }
  }
};

module.exports = resolvers;