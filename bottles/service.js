const bottleRepository = require('./repository')

const { customError } = require('../utils/errors/custom');

const registry = async (fields) => {
  const createRows = await bottleRepository.registry(fields);
  if (createRows.affectedRows === 0) {
    throw customError(400, '등록에 실패했습니다');
  }
  return createRows.insertId;
};

const getBottle = async ({ id }) => {
  const bottles = await bottleRepository.getBottle(id);
  if (bottles.length === 0) {
    throw customError(404, '조회된 해류병이 없습니다.');
  }
  return bottles[0];
};

const getBottles = async ({ user_id }) => {
  const bottles = await bottleRepository.getBottles(user_id);
  if (bottles.length === 0) {
    throw customError(404, '조회된 해류병이 없습니다.');
  }
  return bottles;
};

const getBottlesByCategory = async ({ category }) => {
  const bottles = await bottleRepository.getBottlesByCategory(category);
  if (bottles.length === 0) {
    throw customError(404, '조회된 해류병이 없습니다.');
  }
  return bottles;
};

module.exports = {
  registry,
  getBottle,
  getBottles,
  getBottlesByCategory,
}