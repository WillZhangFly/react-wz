import { connectDB } from "./connect-db";
import md5 from "md5";
import { v4 as uuid } from "uuid";

const assembleUserState = async (userID) => {
  let db = await connectDB();

  const tasks = await db.collection("tasks").find({ owner: userID }).toArray();
  const groups = await db
    .collection("groups")
    .find({ owner: userID })
    .toArray();

  const users = await db.collection("users").find().toArray();

  return {
    users,
    tasks,
    groups,
    session: {
      authenticated: "AUTHENTICATED",
      id: userID,
    },
  };
};

export const signupRoute = (app) => {
  app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const db = await connectDB();
    let collection = db.collection("users");

    let user = await collection.findOne({ name: username });
    if (user) {
      return res.status(500).send("User already existed");
    }

    let id = uuid();

    await collection.insertOne({
      id,
      name: username,
      passwordHash: md5(password),
      friends: [],
    });
    let token = uuid();

    const state = await assembleUserState(id);

    res.status(200).send({ token, state });
  });
};
