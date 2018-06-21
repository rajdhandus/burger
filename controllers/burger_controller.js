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

router.post("/api/burger", function(req, res) {
  burger.addBurger(req.body.burger_name, req.body.devoured, function(data) {
    res.send(data);
  });
});

router.put("/api/burger/:id", function(req, res) {
  burger.updateBurger(req.body.devoured, req.params.id, function(data) {
    res.send(data);
  });
});

module.exports = router;
