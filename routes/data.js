var express = require('express');
var router  = express.Router();

var data_controller = require("../controllers/data_controller.js");
var authenticate = require("../config/middleware/authenticate");

// router.post('/save', authenticate, data_controller.data);

// router.get('/load', authenticate, data_controller.data);

module.exports = router;