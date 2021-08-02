let express = require("express");
let cors = require("cors");
const { connectDB } = require("./connect-db");
const { initializeDB } = require("./initialize-db");
const { authenticationRoute } = require("./authenticate");
const path = require("path");

initializeDB();

let port = process.env.PORT || 5555;
let app = express();

app.listen(port, console.log("Server is listening on port ", port));

app.use(cors(), express.json(), express.urlencoded());

authenticationRoute(app);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.resolve(__dirname, "../../dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
  });
}

export const addNewTask = async (task) => {
  let db = await connectDB();
  let collection = db.collection("tasks");
  await collection.insertOne(task);
};

export const updateTask = async (task) => {
  const { id, group, isComplete, name } = task;
  let db = await connectDB();
  let collection = db.collection("tasks");

  if (group) {
    await collection.updateOne({ id }, { $set: { group } });
  }

  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }

  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }
};

app.post("/task/new", async (req, res) => {
  let task = req.body.task;
  await addNewTask(task);
  res.status(200).send("Added a new task!");
});

app.post("/task/update", async (req, res) => {
  let task = req.body.task;
  await updateTask(task);
  res.status(200).send(`update task with task id ${task.id}`);
});
