var db = require("../models");

exports.save = function (request, response) {
    console.log(request.body)

    request.body.UserId = req.user.id;

    db.Robot.create(request.body).then(function (dbRobo) {
        response.json(dbRobo);
    });
};

// exports.load = function (request, response) {
//     db.Robot.findAll({
//         where: {
//           UserId: req.user.id
//         }
//       }).then(function(dbRobo) {
//         console.log(dbRobo);
//       });
// };