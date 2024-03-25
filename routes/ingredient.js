const express = require('express');
const Ingredient = require('../models/ingredient');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController')

router.post("/",ingredientController.createNewIngredient)
router.get("/all",ingredientController.getAllIngredients)
router.put('/',ingredientController.editIngredient)
router.get("/:id",ingredientController.getSingleIngredient)
router.delete('/:id', ingredientController.deleteIngredient);

module.exports = router;