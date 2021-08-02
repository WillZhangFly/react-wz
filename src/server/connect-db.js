import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL || "mongodb://localhost:27017/reactsaga";

let db = null;

export async function connectDB() {
  if (db) return db;

  let client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  });

  db = client.db();

  return db;
}
