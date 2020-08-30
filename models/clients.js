module.exports = (sequelize, DataTypes) => {

    const client = sequelize.define("client", {
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        middle_name:{
            type: DataTypes.STRING,
        },
        last_name:{
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
    })
return client;
}