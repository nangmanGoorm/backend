const answerService = require('./service');
const response = require('../utils/response');

const registry = async (req, res) => {
  const answerId = await answerService.registry(req.body);
  response(res, 200, { answerId });
};

const getAnswer = async (req, res) => {
  const answer = await answerService.getAnswer(req.params);
  response(res, 200, answer);
};

const getAnswers = async (req, res) => {
  const answers = await answerService.getAnswers(req.params);
  response(res, 200, answers);
};

const getAnswersForJuniorId = async (req, res) => {
  const answers = await answerService.getAnswersForJuniorId(req.params);
  response(res, 200, answers);
};

module.exports = {
  registry,
  getAnswer,
  getAnswers,
  getAnswersForJuniorId,
}