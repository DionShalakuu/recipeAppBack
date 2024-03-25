const { DataTypes } = require("sequelize");
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const Unit = db.define('unit', {
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
}, {
    tableName: 'unit',
    timestamps:false,

});


module.exports = Unit;