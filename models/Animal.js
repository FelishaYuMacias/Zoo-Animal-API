const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init({
    image_link:{
        type: DataTypes.STRING,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    latin_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lifespan:{
        type: DataTypes.STRING,
        allowNull:false
    },
    animal_type:{
        type: DataTypes.STRING,
        allowNull:false
    },
    geo_range:{
        type: DataTypes.STRING,
        allowNull:false
    },
    habitat:{
        type: DataTypes.STRING,
        allowNull:false
    },
    diet:{
        type: DataTypes.STRING,
        allowNull:false
    },
    active_time:{
        type: DataTypes.STRING,
        allowNull:false
    },
    length_min:{
        type: DataTypes.STRING,
        allowNull:false
    },
    length_max:{
        type: DataTypes.STRING,
        allowNull:false
    },
    weight_min:{
        type: DataTypes.STRING,
        allowNull:false
    },
    weight_max:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize
});

module.exports=Animal