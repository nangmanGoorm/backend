const answerRepository = require('./repository')

const { customError } = require('../utils/errors/custom');

const registry = async (fields) => {
  const createRows = await answerRepository.registry(fields);
  if (createRows.affectedRows === 0) {
    throw customError(400, '등록에 실패했습니다');
  }
  return createRows.insertId;
};

const getAnswer = async ({ id }) => {
  const answers = await answerRepository.getAnswer(id);
  if (answers.length === 0) {
    throw customError(404, '조회된 답변이 없습니다.');
  }
  return answers[0];
};

const getAnswers = async ({ user_id }) => {
  const answers = await answerRepository.getAnswers(user_id);
  if (answers.length === 0) {
    throw customError(404, '조회된 답변이 없습니다.');
  }
  return answers;
};

const getAnswersByBottleId = async (bottle_id) => {
  return await answerRepository.getAnswersByBottleId(bottle_id);
};

const getAnswersForJuniorId = async ({ user_id }) => {
  const answers = await answerRepository.getAnswersForJuniorId(user_id);
  if (answers.length === 0) {
    throw customError(404, '조회된 답변이 없습니다.');
  }
  return answers;
};

module.exports = {
  registry,
  getAnswer,
  getAnswers,
  getAnswersByBottleId,
  getAnswersForJuniorId,
}