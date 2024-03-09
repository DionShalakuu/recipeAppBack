const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();
const sequelize =  require('../db/db');
const Ingredient = require('../models/ingredient');
const RecipeIngredient = require('../models/recipe_ingredient');
const { v4: uuidv4 } = require('uuid');
const Unit = require('../models/unit');


router.get("/ingredient/:ingredient", async (req, res) => {
    Recipe.findAll({
        include: [
            {
                model: RecipeIngredient,
                include: [
                    {
                        model: Ingredient,
                        where:{ingredient:req.params.ingredient},
                        
                    },
                    {
                        model: Unit
                    }
                ],
                required:true
            }
        ]
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});


router.post('/', async (req, res) => { 
    try {
        let recipe_id;
        const ingredients = req.body.ingredients; 
        await sequelize.transaction(async (t) => {
            // Create the recipe entry
            const recipeMaker = await Recipe.create(
                {
                    name: req.body.name,
                    description: req.body.description,
                    instructions: req.body.instructions,
                },
                { transaction: t }
            );
            recipe_id = recipeMaker.id;

         
            for (const ingredientItem of ingredients) {
                try {
                    await RecipeIngredient.create(
                        {
                            recipe_id: recipe_id,
                            ingredient_id: ingredientItem.id,
                            unit_id: req.body.unit_id 
                        },
                        { transaction: t }
                    );
                } catch (error) {
                    console.error("Error creating ingredient:", error);
                    throw error;
                }
            }
        });
  
        res.status(200).json({ message: 'Transaction completed successfully', data: req.body });
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Transaction failed', error });
    }
});

router.get("/all",(req,res) =>{
    Recipe.findAll({})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

router.put('/',(req,res)=>{
    Recipe.findByPk(req.body.id)
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
})


router.get("/:id", async (req, res) => {
    Recipe.findOne({
        where: { id: req.params.id },
        include: [
            {
                model: RecipeIngredient,
                where: { recipe_id: req.params.id },
                include: [
                    {
                        model: Ingredient
                    },
                    {
                        model: Unit
                    }
                ]
            }
        ]
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

module.exports = router;

router.delete('/:id', (req, res) => {
    Recipe.findByPk(req.params.id)
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