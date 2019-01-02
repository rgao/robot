var db = require("../models");

exports.registration = function(request, response) {
    response.render("users/registration", {
      layout: 'registration-main'
    });
};

exports.login = function(request, response) {
  response.json("/");
};

exports.signOut = function(request, response) {
    request.logout();
    response.redirect("/");
};

exports.register = function(request, response) {

    db.User.findAll({
      where: {username: request.body.username}
    }).then(function(users) {
      if (users.length > 0) {
        response.json({duplicateUser: true});

      } else {
        db.User.create({
          username: request.body.username,
          email: request.body.email,
          password: request.body.password
        }).then(function() {
          response.send({redirect: '/'});
        }).catch(function(error) {
          response.json(error);
        });
      }
    })
  };