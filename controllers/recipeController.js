const Ingredient = require("../models/ingredient");
const Recipe = require("../models/recipe");
const RecipeIngredient = require("../models/recipe_ingredient");
const Unit = require("../models/unit");
const sequelize =  require('../config/db');
const { v4: uuidv4 } = require('uuid');



const getRecipeByIngredient = async (req, res) => {
    const ingredients = req.query.ingredients.split(","); 
    Recipe.findAll({
        include: [
            {
                model: RecipeIngredient,
                include: [
                    {
                        model: Ingredient,
                        where: {
                            ingredient: ingredients 
                        },
                    },
                    {
                        model: Unit
                    }
                ],
                required: true
            }
        ]
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
}

const createRecipe = async (req, res) => { 
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
}

const getAllRecipes = (req,res)=>{
    Recipe.findAll({
    })
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

const getSingleRecipe =  async (req, res) => {
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
}

const DeleteRecipe = (req,res)=>{
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
}

module.exports = {
    createRecipe,
    DeleteRecipe,
    getAllRecipes,
    getRecipeByIngredient,
    getSingleRecipe
}