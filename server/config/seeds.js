const db = require('../config/connection');
const { History, Guess, Feedback } = require('../models');

db.once('open', async () => {
  await History.deleteMany({});
  await Guess.deleteMany({});
  await Feedback.deleteMany({});

  // create history data
  const historyData = [];

  for (let i = 0; i < 2; i += 1) {

    historyData.push({ historyId: i });
  }

  const createdHistory = await History.collection.insertMany(historyData);

  // console.log(historyData);

  // create guess
  const createdGuesses = [];
  for (let i = 0; i < createdHistory.ops.length; i += 1) {
    const guessBody = '1234';

    const { historyId, _id: id } = createdHistory.ops[i];

    const createdGuess = await Guess.create({ historyId, guessBody });

    const updatedHistory = await History.updateOne(
      { _id: id },
      { $set: { guess: createdGuess._id } }
    );
    createdGuesses.push(createdGuess);
  }

  // create feedback
  const createdFeedbacks = [];
  for (let i = 0; i < createdHistory.ops.length; i += 1) {
    const feedbackBody = 'hello feedback';

    const { historyId, _id: id } = createdHistory.ops[i];

    const createdFeedback = await Feedback.create({ historyId, feedbackBody });

    const updatedHistory = await History.updateOne(
      { _id: id },
      { $set: { feedback: createdFeedback._id } }
    );
    createdFeedbacks.push(createdFeedback);
  }

  console.log('all done!');
  process.exit(0);
});