const Ingredient = require("../models/ingredient")

const createNewIngredient = (req,res)=>{
    Ingredient.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

const getAllIngredients = (req,res) =>{
    Ingredient.findAll({
    })
    .then(response => res.json(response))
    .catch(err => res.json(err))
}
const getSingleIngredient = (req,res) =>{
        Ingredient.findByPk(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.json(err))
}
const deleteIngredient = (req,res) =>{
    Ingredient.findByPk(req.params.id)
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

const editIngredient = (req,res) =>{
        Ingredient.findByPk(req.body.id)
        .then(response => {
            response.name = req.body.name !== "" ? req.body.name : null;
            response.description = req.body.description !== "" ? req.body.description : null;
            response.instructions = req.body.instructions !== "" ? req.body.instructions : null;
            response.save()
            .then(response => {
                res.json({
                    data: response,
                    updated: true
                });
            })
            .catch(err => res.json(err));
        }).catch(err => err.json(res))
}

module.exports = {
    createNewIngredient,
    getAllIngredients,
    getSingleIngredient,
    deleteIngredient,
    editIngredient
}