const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
    db.item.findAll().then(items => res.send(items));
});

router.post("/new", (req,res)=>{
    db.item.create({
        name: req.body.name,
        length: req.body.length,
        price: req.body.price,
        cost: req.body.cost,
        stock_qty: req.body.stock_qty,
        storage_loc: req.body.storage_loc,
        weight: req.body.weight,
    }).then(submittedItem => res.send(submittedItem)).catch(err=>console.log(err));
});

module.exports = router;