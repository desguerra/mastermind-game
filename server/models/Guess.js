const { Schema } = require('mongoose');

const guessSchema = new Schema(
  {
    guessBody: {
      type: String,
      required: 'You need to leave a full guess!'
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = guessSchema;