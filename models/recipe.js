const { DataTypes } = require("sequelize");
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const Recipe = db.define('recipe', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4() 
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'recipe',
    timestamps:false,

});


module.exports = Recipe;