const userRepository = require('./repository')

const { customError } = require('../utils/errors/custom');

const checkNickname = async ({ nickname }) => {
  const checkRows = await userRepository.checkNickname(nickname);
  if (checkRows.length > 0) {
    throw customError(400, '중복된 닉네임이 존재합니다');
  }
};

const signup = async ({ nickname, type }) => {
  const createRows = await userRepository.signup(nickname, type);
  if (createRows.affectedRows === 0) {
    throw customError(400, '회원가입에 실패했습니다');
  }
  return createRows.insertId;
};

const getUser = async ({ id }) => {
  const user = await userRepository.getUser(id);
  if (user.affectedRows === 0) {
    throw customError(404, '조회된 유저가 없습니다.');
  }
  return user[0]
};

const updateUser = async ({ id }, updateFields) => {
  const updateRows = await userRepository.updateUser(id, updateFields);
  if (updateRows.affectedRows === 0) {
    throw customError(400, '수정에 실패했습니다');
  }
};

module.exports = {
  checkNickname,
  signup,
  getUser,
  updateUser,
}