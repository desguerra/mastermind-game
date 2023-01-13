const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema(
  {
    historyId: {
      type: Number,
      required: true
    },
    feedbackBody: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Feedback = model('Feedback', feedbackSchema);

module.exports = Feedback;