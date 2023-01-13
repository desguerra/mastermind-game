const { Schema, model } = require('mongoose');

const historySchema = new Schema(
  {
    historyId: {
      type: Number,
      required: true,
      unique: true
    },
    guess: {
      type: Schema.Types.ObjectId,
      ref: 'Guess'
    },
    feedback: {
      type: Schema.Types.ObjectId,
      ref: 'Feedback'
    }
  },
  {
    toJSON: {
      getters: false
    }
  }
);

const History = model('History', historySchema);

module.exports = History;