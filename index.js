const express = require("express");
const apiRoutes = require("./routes");

const app = express();

var port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.use("/api", apiRoutes);

app.listen(port, function () {
  console.log("Server started at http://localhost:8080");
});
