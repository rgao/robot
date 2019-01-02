var express = require('express');
var router  = express.Router();

var user_controller = require('../controllers/user_controller');
// var authenticate = require("../config/middleware/authenticate");

router.get('/register', user_controller.registration);

router.get('/signout', user_controller.signOut);

router.post('/login', user_controller.login);

router.post('/register', user_controller.register);

module.exports = router;