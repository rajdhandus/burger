const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/api/burgers", function(req, res) {
  burger.all(function(data) {
    res.send(data);
  });
});

router.get("/", function(req, res) {
  res.render("index");
});

module.exports = router;
