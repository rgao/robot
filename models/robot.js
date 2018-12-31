module.exports = function (sequelize, DataTypes) {
    var Robot = sequelize.define("Robot", {
        username: {
            type: DataTypes.STRING,
            validate: {
                len: [4]
            }
        },
        name: {
            type: DataTypes.STRING,
        },
        icon: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        xcoor: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        ycoor: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        angle: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        background: {
            type: DataTypes.STRING,
        }
    });
    return Robot;
};