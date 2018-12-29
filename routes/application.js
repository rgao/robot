var express = require('express');
var router  = express.Router();

var app_controller = require("../controller/app_controller.js");

router.get('/', app_controller.index);

module.exports = router;