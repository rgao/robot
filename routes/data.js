var express = require('express');
var router  = express.Router();

var data_controller = require("../controller/data_controller.js");

router.get('/', data_controller.index);

module.exports = router;