const sequelize = require('../config/connection');
const {Animal} = require("../models")
const seed = async ()=>{
    await sequelize.sync({force:true})
  
    const animals = [
        {
            image_link:"https://en.wikipedia.org/wiki/File:African_Elephant_(Loxodonta_africana)_male_(17289351322).jpg",
            name:"African Bush Elephant",
            latin_name:"Loxodonta africana africana",
            lifespan:"60 - 70 years",
            animal_type:"Mammal",
            geo_range:"central and southern Africa",
            habitat:"Forest, savannah and flood plains",
            diet:"Herbivore",
            active_time:"Diurnal",
            length_min:"10ft",
            length_max:"12ft",
            weight_min:"7,900lbs",
            weight_max:"12,000lbs"
        },
        {
            image_link:"",
            name:"",
            latin_name:"",
            lifespan:"",
            animal_type:"",
            geo_range:"",
            habitat:"",
            diet:"",
            active_time:"",
            length_min:"",
            length_max:"",
            weight_min:"",
            weight_max:""
        },
        {
            image_link:"",
            name:"",
            latin_name:"",
            lifespan:"",
            animal_type:"",
            geo_range:"",
            habitat:"",
            diet:"",
            active_time:"",
            length_min:"",
            length_max:"",
            weight_min:"",
            weight_max:""
        },
        {
            image_link:"",
            name:"",
            latin_name:"",
            lifespan:"",
            animal_type:"",
            geo_range:"",
            habitat:"",
            diet:"",
            active_time:"",
            length_min:"",
            length_max:"",
            weight_min:"",
            weight_max:""
        },
        {
            image_link:"",
            name:"",
            latin_name:"",
            lifespan:"",
            animal_type:"",
            geo_range:"",
            habitat:"",
            diet:"",
            active_time:"",
            length_min:"",
            length_max:"",
            weight_min:"",
            weight_max:""
        },
    ]
    try{
        await Animal.bulkCreate(animals)
    }catch(err){
        throw err
    }
    process.exit(0);
}
seed()