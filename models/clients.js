module.exports = (sequelize, DataTypes) => {

    const client = sequelize.define("client", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },        
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        city:{
            type: DataTypes.STRING,
        },
        address:{
            type: DataTypes.STRING,
        },
        discount:{
            type: DataTypes.DECIMAL,
            defaultValue: 0
        }
    });

    client.associate = models =>{
        client.hasMany(models.bill);
    }
return client;
}