var express = require('express');
var router  = express.Router();

var user_controller = require('../controllers/user_controller');
var passport = require("../config/passport");
var authenticate = require("../config/middleware/authenticate");

router.get('/register', user_controller.registration);

router.post('/register', user_controller.register);

router.get('/login', user_controller.login_page);

router.post('/login', passport.authenticate("local"), user_controller.login);

router.get('/logout', user_controller.signOut);

module.exports = router;