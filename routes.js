module.exports = function(app) {

    const application = require("./routes/application.js");
    const data = require("./routes/data.js");
    const users = require("./routes/users.js");

    app.use("/", application);
    app.use("/data", data);
    app.use("/users", users);
}