const { Schema } = require('mongoose');

const feedbackSchema = new Schema(
  {
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

module.exports = feedbackSchema;