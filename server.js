const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const burgerRouter = require("./controllers/burger_controller");

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(burgerRouter);

app.listen(PORT, function() {
  console.log("Application is up and runngin on " + PORT);
});
