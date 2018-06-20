const connection = require("./connection");

const orm = {
  selectAll: function() {
    connection.query("SELECT * FROM burgers", function(err, data) {
      if (err) throw err;
      console.log(data);
      return data;
    });
  },
  insertOne: function() {},
  updateOne: function() {}
};

module.exports = orm;
