import { connectMongoDB } from "../../utils/mongo";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { db, client } = await connectMongoDB();
      const Meetup = db.collection("meetUp");

      await Meetup.insertOne(req.body);

      client.close();
      res.status(201).json({ message: "MEETUP created successfully." });
    }
  } catch (error) {
    res.status(400).json({ message: "An error occured." + error.message });
  }
}

module.exports = handler;
