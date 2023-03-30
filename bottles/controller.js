const bottleService = require('./service');
const answerService = require('../answers/service');
const response = require('../utils/response');

const registry = async (req, res) => {
  const bottleId = await bottleService.registry(req.body);
  response(res, 200, { bottleId });
};

const getBottle = async (req, res) => {
  const bottle = await bottleService.getBottle(req.params);
  const answers = await answerService.getAnswersByBottleId(req.params);
  bottle.answers = answers
  response(res, 200, bottle);
};

const getBottles = async (req, res) => {
  const bottles = await bottleService.getBottles(req.params);
  response(res, 200, bottles);
};

const getBottlesByCategory = async (req, res) => {
  const bottles = await bottleService.getBottlesByCategory(req.params);
  response(res, 200, bottles);
};

module.exports = {
  registry,
  getBottle,
  getBottles,
  getBottlesByCategory
}