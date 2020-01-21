module.exports = (sequelize, DataTypes) => {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.INTEGER.BOOLEAN,
            defaultValue: false,
        }

    });
    return Burger;
}