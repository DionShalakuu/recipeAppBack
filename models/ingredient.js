const { DataTypes } = require("sequelize");
const db = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const Ingredient = db.define('ingredient', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4() 
    },
    ingredient: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    amount: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    unit_id: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
}, {
    tableName: 'ingredient',
    timestamps:false,

});


module.exports = Ingredient;