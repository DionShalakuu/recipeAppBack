const { DataTypes } = require("sequelize");
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const Recipe = require("./recipe");
const Ingredient = require("./ingredient");
const Unit = require("./unit");

const RecipeIngredient = db.define('recipe_ingredient', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4() 
    },
    recipe_id: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    ingredient_id: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    unit_id: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    amount: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
    },
}, {
    tableName: 'recipe_ingredient',
    timestamps:false,

});

Recipe.hasMany(RecipeIngredient, { sourceKey: "id", foreignKey: "recipe_id" });
RecipeIngredient.belongsTo(Recipe, { foreignKey: "recipe_id", targetKey: "id" });

RecipeIngredient.hasOne(Ingredient, { sourceKey: "ingredient_id", foreignKey: "id" });
Ingredient.belongsTo(RecipeIngredient, { foreignKey: "id", targetKey: "ingredient_id" });

RecipeIngredient.hasOne(Unit, { sourceKey: "unit_id", foreignKey: "id" });
Unit.belongsTo(RecipeIngredient, { foreignKey: "id", targetKey: "unit_id" });

module.exports = RecipeIngredient;