const connection = require("./connection");

const orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, data) {
      if (err) throw err;
      console.log(data);
      cb(data);
    });
  },
  insertOne: function(name, devoured, cb) {
    connection.query(
      "INSERT INTO burgers(burger_name, devoured) VALUES(?, ?)",
      [name, devoured],
      function(err, data) {
        if (err) throw err;
        console.log(data);
        cb(data);
      }
    );
  },
  updateOne: function(devoured, id, cb) {
    connection.query(
      "UPDATE burgers SET devoured=? WHERE id=?",
      [devoured, id],
      function(err, data) {
        if (err) throw err;
        console.log(data);
        cb(data);
      }
    );
  }
};

module.exports = orm;
