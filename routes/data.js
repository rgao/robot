var express = require('express');
var router  = express.Router();

var data_controller = require("../controllers/data_controller.js");
// var authenticate = require("../config/middleware/authenticate");

router.post('/save', data_controller.save);

// router.get('/load', authenticate, data_controller.data);

module.exports = router;