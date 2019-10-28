var exphbs = require("express-handlebars");
var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./controllers/burgers_controller')(app)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
