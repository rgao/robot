var express = require("express");

var router = express.Router();

router.get("/", function(request, response) {
    var testo = {test: "rawr"}
    response.render("index", testo);
});

module.exports = router;