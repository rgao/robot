module.exports = function (sequelize, DataTypes) {
    const Robot = sequelize.define("Robot", {
        name: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1]
            }
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

    Robot.associate = function (models) {
        Robot.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Robot;
};