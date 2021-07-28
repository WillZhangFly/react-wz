let express = require("express");

let port = 5555;
let app = express();

app.listen(port, console.log("Server is listening on port ", port));

app.get("/", (req, res) => {
  res.send("Hello Saga");
});
