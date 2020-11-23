import express from "express";
const router = require("express").Router();
import User from "../models/userModel";

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

module.exports = router;
