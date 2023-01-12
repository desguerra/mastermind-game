const { Schema, model } = require('mongoose');
const feedbackSchema = require('./Feedback');
const guessSchema = require('./Guess');

const historySchema = new Schema(
  {
    guess: [guessSchema],
    feedback: [feedbackSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const History = model('History', historySchema);

module.exports = History;