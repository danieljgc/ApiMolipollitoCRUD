const express = require('express');
const router = express.Router();
const platesDB = require('../src/db/platosDB')

router.get("/bycategory/:category", function(req, res){
    const category = req.params.category;
    platesDB.getPlatesbyCategory(category, function(response){
        res.json(response)
    })
})

router.get("/byname/:name", function(req, res){
    const name = req.params.name;
    platesDB.getPlatebyName(name, function(response){
        res.json(response)
    })
})

router.get("/plusiva/:id", function(req, res){
    const pid = req.params.id;
    platesDB.getPlatePlusIva(pid, function(response){
        res.json(response)
    })
})

router.post("/publicar/:id", function(req, res){
    const pid = req.params.id;
    const plate = req.body;
    platesDB.addPlate(pid, plate, function(response){
        res.json(response)
    })
})

router.put("/actualizar/:id", function(req, res){
    const pid = req.params.id;
    const plate = req.body;
    platesDB.updatePlate(pid, plate, function(response){
        res.json(response)
    })
})

router.delete("/eliminar/:id", function(req, res){
    const pid = req.params.id;
    platesDB.delePlate(pid, function(response){
        res.json(response)
    })
})

module.exports = router;