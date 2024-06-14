import { MongoClient } from "mongodb";

export async function connectMongoDB() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  return { db, client };
}
