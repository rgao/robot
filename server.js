const express = require("express");
const path = require("path");
const app = express();
const logger = require("morgan");
var debug = require("debug")("express-example");
const session = require('express-session');

const passport = require("./config/passport");
const config = require("./config/extra-config");
var db = require("./models");

app.set('views', path.join(__dirname, 'views'));

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const isAuth = require("./config/middleware/authenticate");
const authCheck = require('./config/middleware/authenticationStatus');

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

require("./routes")(app);

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    })
});

var mysql=require("mysql2");
var connection;

var PORT = process.env.PORT || 8080;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Zubenelakrab",
        database: "burgers_db"
    });
};

connection.connect(function (error) {
    if (error) {
        console.error("error connection: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});