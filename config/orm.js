const connection = require("./connection");

const orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, data) {
      if (err) throw err;
      console.log(data);
      cb(data);
    });
  },
  insertOne: function() {},
  updateOne: function() {}
};

module.exports = orm;
