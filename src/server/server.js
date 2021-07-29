let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
const { connectDB } = require("./connect-db");

let port = 5555;
let app = express();

app.listen(port, console.log("Server is listening on port ", port));

app.use(cors(), bodyParser());

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
