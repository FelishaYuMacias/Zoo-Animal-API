const express = require('express');
const router = express.Router();
const animalRoutes = require("./animalController")


router.get("/",(req,res)=>{
    res.send("this is the homepage")
})

router.use("/api/animals",animalRoutes)

module.exports = router;