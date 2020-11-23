const express = require("express");
const apiRoutes = require("./routes/bioRoutes");
const userRoutes = require("./routes/userRoutes");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

var port = process.env.PORT || 8080;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use("/api", apiRoutes);
app.use("/users", userRoutes);

const dbPath = "mongodb://localhost/firstrestapi";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
const mongo = mongoose.connect(dbPath, options);

mongo.then(
  () => {
    console.log("connected");
  },
  (error) => {
    console.log(error, "error");
  }
);

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.listen(port, function () {
  console.log("Server started at http://localhost:8080");
});
