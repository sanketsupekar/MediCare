//console.log("Project Runnig");
const express = require("express");
const apiRouter = require("./routes")
const port = process.env.PORT || 3001;
const {connectToDb} = require("./controllers/mongoose.controller");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

//connectToDb();
app.use("/api",apiRouter);
app.use("*", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log("Server is ready to listening....",port);
});