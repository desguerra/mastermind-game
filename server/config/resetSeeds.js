const db = require('../config/connection');
const { History, Guess, Feedback } = require('../models');

db.once('open', async () => {
  await History.deleteMany({});
  await Guess.deleteMany({});
  await Feedback.deleteMany({});

  console.log('reset - all done!');
  process.exit(0);
});