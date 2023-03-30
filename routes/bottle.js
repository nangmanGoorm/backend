const express = require('express');
const asyncWrap = require('../utils/asyncWrap');
const bottleController = require('../bottles/controller');
const router = express.Router();

router.post('/', asyncWrap(bottleController.registry));
router.get('/:id', asyncWrap(bottleController.getBottle));

router.get('/category/:category', asyncWrap(bottleController.getBottlesByCategory));


module.exports = router;