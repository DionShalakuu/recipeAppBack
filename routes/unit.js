const express = require('express');
const Unit = require('../models/unit');
const router = express.Router();

router.post("/",(req,res)=>{
    Unit.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
})

router.get("/all",(req,res) =>{
    Unit.findAll({
        
    })
    .then(response => res.json(response))
    .catch(err => res.json(err))
})


router.get("/:id",(req,res) =>{
    Unit.findByPk(req.params.id)
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
    Unit.findByPk(req.params.id)
        .then(response => {
            if (response == null) {
                res.json({ error: "Type not found." });
            } else {
                response.destroy()
                    .then(() => res.json({ data: response, isDeleted: true }))
                    .catch(err => res.json({ error: err.message, isDeleted: false }));
            }
        })
        .catch(err => res.json(err));
});

module.exports = router;