const sequelize = require('../config/connection');
const {Animal} = require("../models/Animal")
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
            diet:"Grass, Fruit, Roots",
            active_time:"Diurnal",
            length_min:"10ft",
            length_max:"12ft",
            weight_min:"7,900lbs",
            weight_max:"12,000lbs"
        },
        {
            image_link:"",
            name:"Komodo Dragon",
            latin_name:"Varanus komodoensis",
            lifespan:"25 - 40 years",
            animal_type:"Reptile",
            geo_range:"Indonesia and surrounding islands",
            habitat:"Open woodland and hillsides",
            diet:"Pigs, Deer, Water Buffalo",
            active_time:"Diurnal",
            length_min:"6.6ft",
            length_max:"10.3ft",
            weight_min:"150lbs",
            weight_max:"300lbs"
        },
        {
            image_link:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/220px-Plains_Zebra_Equus_quagga.jpg",
            name:"Zebra",
            latin_name:"Equus zebra, Equus quagga, Equus grevyi",
            lifespan:"20 - 30 years",
            animal_type:"Mammal",
            geo_range:"Eastern and Southern Africa",
            habitat:"Open grassland and plains",
            diet:"Grasses, Leaves, Buds", 
            active_time:"Diurnal",
            length_min:"6.6ft",
            length_max:"9ft",
            weight_min:"485lbs",
            weight_max:"893lbs"
        },
        {
            image_link:"https://en.wikipedia.org/wiki/File:Cuttlefish_komodo_large.jpg",
            name:"Cuttlefish",
            latin_name:"Sepiida",
            lifespan:"2 years",
            animal_type:"Cephalopod",
            geo_range:"Worldwide",
            habitat:"Coastal and deeper waters",
            diet:"Crab, Shrimp, Fish",
            active_time:"Day and night",
            length_min:"5.9in",
            length_max:"20in",
            weight_min:"6.6lbs",
            weight_max:"23lbs"
        },
        {
            image_link:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Peacock_Plumage.jpg/220px-Peacock_Plumage.jpg",
            name:"Peacock",
            latin_name:"Pavo cristatus",
            lifespan:"12 - 20 years",
            animal_type:"bird",
            geo_range:"Africa and Asia",
            habitat:"Desert and savanna areas",
            diet:"Grains, Seeds, Insects",
            active_time:"Diurnal",
            length_min:"34in",
            length_max:"42in",
            weight_min:"6lbs",
            weight_max:"13.2lbs"
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