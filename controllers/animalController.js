const express = require('express');
const router = express.Router();
const { Animal } = require('../models');

router.get("/", (req, res) => {
    Animal.findAll().then(allAnimals => {
        res.json(allAnimals)
    }).catch(err => {
        console.log(err);
        res.json({
            msg: "an error occurred",
            err,
        })
    })
})
//random animal
router.get("/random", async (req, res) => {

    let temp = []
    const animalArray = await Animal.findAll()
  
    animalArray.map(animal => {
      temp.push(router.get({ plain: true }).id)
    })
  
    const randomID = Math.floor(Math.random() * temp.length +1)
    console.log(randomID)
    Animal.findByPk(randomID
    ).then(randomAnimal => {
        res.json(randomAnimal)
    }).catch(err => {
        console.log(err);
        res.json({
            msg: "an error occurred",
            err,
        })
    })
})

router.get("/:id", (req,res) => {
    Animal.findByPk(req.params.randomAnimal).then(animalData => {
        res.json(animalData)
    }).catch(err => {
        console.log(err);
        res.json({
            msg: "an error occurred",
            err,
        })
    })
})

router.post("/", (req, res) => {
    try {
        Animal.create({
            //animal data here!!!!! 
            //task: req.body.task,
            // priority: req.body.priority,
            // isComplete: req.body.isComplete,
            // UserId: userData.id
        }).then(animalData => {
            res.json(animalData)
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err })
    }
})

router.delete("/:id", (req, res) => {
    try {
        Animal.destroy({
            where: {
                id: req.params.id
            }
        }).then(delAnimal => {
            res.json({ msg: "animal deleted", delAnimal })
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err })
    }
})
router.put("/:id", (req, res) => {
    try {
        Animal.findByPk(req.params.id).then(foundAnimal => {
            if (!foundAnimal) {
                return res.status(404).json({
                    msg: "no such item exists!"
                })
            }  else {
                Animal.update(
                    req.body,
                    {
                        where: {
                            id: req.params.id
                        }
                    }).then(updatedAnimal => {
                        res.json(updatedAnimal)
                    })
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err })
    }
})


module.exports = router;