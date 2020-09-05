module.exports = (sequelize, DataTypes) => {

    const item = sequelize.define("item", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        length:{
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
        weight:{
            type: DataTypes.FLOAT,
            allowNull: false
        }

    });

    item.associate = models =>{
        item.belongsToMany(models.bill, { through: models.bill_items });
    };
    return item;
}