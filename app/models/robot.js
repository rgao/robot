module.exports = function (sequelize, DataTypes) {
    var Robot = sequelize.define("Robot", {
        command: { 
            type: DataTypes.STRING, 
            len: [1] },
        status_: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            len: [1]
        }
    });
    return Robot;
};