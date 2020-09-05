const bill = require("./bill");

module.exports = (sequelize, DataTypes) => {

    const bill_items = sequelize.define("bill_items", {
        qnty:{
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        unit_value:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
    });

    return bill_items;
}