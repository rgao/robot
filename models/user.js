var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
          }
      }
    }, {
      hooks: {
        beforeCreate: function(user, options) {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        }
      }
    });

    User.prototype.validPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
    }

    // User.associate = function(models) {
    //   User.hasMany(models.robot, {
    //     onDelete: "cascade"
    //   });
    // }

    return User;
  };