/**
  All configuration that is required 
  for a shared mongo server hosted in the cloud.
 */
const { MongoClient } = require("mongodb");
let database = null;

async function startDatabase() {
  // pass: D5UHXkRZK3arr3S
  // user: rick_c137
  const mongoDBURL = `mongodb+srv://rick_c137:D5UHXkRZK3arr3S@pickupzoo.9vmtd.mongodb.net/<dbname>`;
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  database = connection.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};
