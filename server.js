var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require("./controllers/catsController.js");
// app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});