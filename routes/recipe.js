const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController')


router.get("/ingredients", recipeController.getRecipeByIngredient);
router.post('/', recipeController.createRecipe);
router.get("/all", recipeController.getAllRecipes)
router.get("/:id", recipeController.getSingleRecipe);
router.delete('/:id', recipeController.DeleteRecipe);

module.exports = router;