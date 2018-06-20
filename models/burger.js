const orm = require("../config/orm");

const burger = {
  all: function(cb) {
    orm.selectAll(function(data) {
      cb(data);
    });
  }
};

module.exports = burger;
