const express = require('express');
const asyncWrap = require('../utils/asyncWrap');
const answerController = require('../answers/controller');
const router = express.Router();

router.post('/', asyncWrap(answerController.registry));
router.get('/:id', asyncWrap(answerController.getAnswer));

module.exports = router;