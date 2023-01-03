const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init({
    // add properites here, ex:
//     task: {
//         type: DataTypes.STRING,
//         allowNull:false
//    },
//    priority: {
//         type: DataTypes.STRING,
//         allowNull:false
//    },
//    isComplete: {
//         type: DataTypes.BOOLEAN,
//         defaultValue:false,
//         allowNull:false
       
//    }
},{
    sequelize
});

module.exports=Animal