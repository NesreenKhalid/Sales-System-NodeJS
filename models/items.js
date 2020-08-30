module.exports = (sequelize, DataTypes) => {

    const item = sequelize.define("item", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        size:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cost:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock_qty:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        storage_loc:{
            type: DataTypes.STRING,
        },

    })
    return item;
}