const Unit = require("../models/unit")

const getAllUnits = (req,res)=>{
    Unit.findAll({
        
    })
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

const createNewUnit = (req,res)=>{
    Unit.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
}
const getSingleUnit = (req,res)=>{
    Unit.findByPk(req.params.id)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}
const deleteUnit = (req,res)=>{
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
}

module.exports = {
    getAllUnits,
    createNewUnit,
    getSingleUnit,
    deleteUnit
}