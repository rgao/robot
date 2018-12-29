module.exports = function(app) {

    const application = require("./routes/application.js");
    const data = require("./routes/data.js");

    app.use("/", application);
    app.use("/data", data);
}