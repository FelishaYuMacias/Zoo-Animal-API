const sequelize = require('../config/connection');
const {Animal} = require("../models")
const seed = async ()=>{
    await sequelize.sync({force:true})
  
    const animals = [
        // {
        //     task:"Be the very best, like no one ever was",
        //     priority:"high",
        //     UserId:1
        // },
        // {
        //     task:"Catch 'em all!",
        //     priority:"high",
        //     UserId:1
        // },
        // {
        //     task:"take a nap",
        //     priority:"med",
        //     UserId:2
        // },

    ]
    try{
        await Animal.bulkCreate(animals)
    }catch(err){
        throw err
    }
    process.exit(0);
}
seed()