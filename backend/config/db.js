const { MongoClient } = require("mongodb");

let db = null;

const connectDB = async () => {
  if (db) return; // Prevent multiple connections

  const client = await MongoClient.connect("process.env.mongo_uri", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db = client.db("portfolioDb"); // Make sure this name matches your database
  console.log("Connected to MongoDB");
};

const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.");
  }
  return db;
};

module.exports = { connectDB, getDB };
