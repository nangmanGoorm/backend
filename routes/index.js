const express = require('express');
const response = require('../utils/response');
const router = express.Router();

const userRouter = require('./user');
const bottleRouter = require('./bottle');
const answerRouter = require('./answer');

router.use('/health-check', (req, res) => {
  response(res, 200, { status: 'success' })
});

router.use('/users', userRouter);
router.use('/bottles', bottleRouter);
router.use('/answers', answerRouter);

module.exports = router;