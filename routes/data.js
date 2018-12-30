var express = require('express');
var router  = express.Router();

var data_controller = require("../controllers/data_controller.js");

router.get('/', data_controller.data);

module.exports = router;