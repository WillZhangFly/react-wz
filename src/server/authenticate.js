import { connectDB } from "./connect-db";
import md5 from "md5";
import { v4 as uuid } from "uuid";

const authenticateTokens = [];

const assembleUserState = async (user) => {
  let db = await connectDB();

  const tasks = await db.collection("tasks").find({ owner: user.id }).toArray();
  const groups = await db
    .collection("groups")
    .find({ owner: user.id })
    .toArray();

  return {
    tasks,
    groups,
    session: {
      authenticated: "AUTHENTICATED",
      id: user.id,
    },
  };
};

export const authenticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    console.log("req body", req.body);
    const { username, password } = req.body;
    const db = await connectDB();
    let collection = db.collection("users");

    let user = await collection.findOne({ name: username });
    if (!user) {
      return res.status(500).send("User not found");
    }

    let hash = md5(password);

    let passwordCorrect = hash === user.passwordHash;

    if (!passwordCorrect) {
      return res.status(500).send("Incorrect password");
    }

    let token = uuid();

    authenticateTokens.push({
      token,
      userID: user.id,
    });

    const state = await assembleUserState(user);

    res.send({ token, state });
  });
};
