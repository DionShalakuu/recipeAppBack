const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController')

router.post("/",unitController.createNewUnit)
router.get("/all",unitController.getAllUnits)
router.get("/:id",unitController.getSingleUnit)
router.delete('/:id', unitController.deleteUnit);

module.exports = router;