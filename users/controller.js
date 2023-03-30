const userService = require('./service');
const response = require('../utils/response');

const checkNickname = async (req, res) => {
  await userService.checkNickname(req.params);
  response(res, 200, '사용 가능한 닉네임입니다');
};

const signup = async (req, res) => {
  await userService.checkNickname(req.body);
  const userId = await userService.signup(req.body);
  response(res, 200, { userId });
};

const getUser = async (req, res) => {
  const user = await userService.getUser(req.params);
  response(res, 200, user);
};

const updateUser = async (req, res) => {
  await userService.updateUser(req.params, req.body);
  response(res, 200);
};


module.exports = {
  checkNickname,
  signup,
  getUser,
  updateUser,
}