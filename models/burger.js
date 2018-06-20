const orm = require("../config/orm");

const burger = {
  all: function() {
    orm.selectAll();
  }
};

module.exports = burger;
