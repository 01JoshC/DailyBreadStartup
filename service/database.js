const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('dailybread');
const userCollection = db.collection('user');
const streakCollection = db.collection('streak');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
  await
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addStreak(streak) {
  return streakCollection.insertOne(streak);
}

async function updateProgress(email, book, chapter) {
  await userCollection.updateOne({ "email": email}, { $set: {"book": book, "chapter": chapter}})
}

async function updateStreak(email, streak) {
  await streakCollection.updateOne({ "email": email}, { $set: {"streak": streak}})
}

async function getStreak(email) {
  let data = await streakCollection.findOne({ "email": email})
  return data.streak
}

async function updateTimestamp(email, timestamp) {
  await userCollection.updateOne({ "email": email}, { $set: {"timestamp": timestamp}})
}

function getHighStreaks() {
  const query = { streak: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { streak: -1 },
    limit: 15,
  };
  const cursor = streakCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addStreak,
  getHighStreaks,
  updateTimestamp,
  getStreak,
  updateProgress,
  updateStreak
};
