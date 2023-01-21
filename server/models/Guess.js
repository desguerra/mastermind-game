const { Schema, model } = require('mongoose');

const guessSchema = new Schema(
  {
    historyId: {
      type: Number,
      required: true,
      unique: true
    },
    guessBody: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: false
    }
  }
);

const Guess = model('Guess', guessSchema);

module.exports = Guess;