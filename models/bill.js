module.exports = (sequelize, DataTypes) => {

    const bill = sequelize.define("bill", {
        discount:{
            type: DataTypes.DECIMAL,
            defaultValue: 0
        }
    });

    bill.associate = models => {
        bill.belongsTo(models.client,{
            foreignKey: {
                allowNull: false
            }
        });

        bill.belongsToMany(models.item, { through: models.bill_items });
    };
    return bill;
}