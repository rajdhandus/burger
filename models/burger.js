const orm = require("../config/orm");

const burger = {
  all: function(cb) {
    orm.selectAll(function(data) {
      cb(data);
    });
  },
  addBurger: function(name, devoured, cb) {
    orm.insertOne(name, devoured, function(data) {
      cb(data);
    });
  },
  updateBurger: function(devoured, id, cb) {
    orm.updateOne(devoured, id, function(data) {
      cb(data);
    });
  }
};

module.exports = burger;
