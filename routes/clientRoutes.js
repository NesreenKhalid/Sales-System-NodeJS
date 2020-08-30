const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
    db.client.findAll().then(clients => res.send(clients));
});

router.post("/new", (req, res)=>{
    db.client.create({
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        city: req.body.city,
        address: req.body.address,
        discount: req.body.discount
    }).then(submittedClient => res.send(submittedClient));
});
module.exports = router;