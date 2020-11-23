const epxress = require("express");
const router = require("express").Router();
const User = require("../models/userModel");

router.get("/", (req, res) => {
  User.get = function (callback, limit) {
    User.find(callback).limit(limit);
  };
  User.get(function (err, user) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Got users  successfully!",
      data: user,
    });
  });
});
router.post("/signin", async (req, res) => {
  const signInUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signInUser) {
    res.send({
      name: signInUser.name,
      email: signInUser.email,
      isAdmin: signInUser.isAdmin,
      //token and id in need
    });
  } else {
    res.status(401).send({ msg: "Inalig Email or password" });
  }
});

router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      //id will be needed
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      //token will be needed
    });
  } else {
    res.status(401).send({ msg: "Invalid user Data." });
  }
});

module.exports = router;
