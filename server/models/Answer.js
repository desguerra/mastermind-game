const { Schema, model } = require('mongoose');

const answerSchema = new Schema(
  {
    answer: {
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

const Answer = model('Answer', answerSchema);

module.exports = Answer;