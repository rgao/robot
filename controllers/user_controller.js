var db = require("../models");

exports.registration = function(request, response) {
    response.render("users/registration");
};

exports.login = function(request, response) {
  response.json("/");
};

exports.signOut = function(request, response) {
    request.logout();
    response.redirect("/");
};

exports.register = function(request, response) {

    db.user.findAll({
      where: {username: request.body.username}
    }).then(function(users) {
      if (users.length > 0) {
        response.json({duplicateUser: true});

      } else {
        db.user.create({
          username: request.body.username,
          email: request.body.email,
          passcode: request.body.passcode
        }).then(function() {
          response.send({redirect: '/'});
        }).catch(function(error) {
          response.json(error);
        });
      }
    })
  };