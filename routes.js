let router = require("express").Router();

router.get("/", function (req, res) {
  res.json({
    status: "API works",
    message: "Welcome to my first Rest API",
  });
});

module.exports = router;
