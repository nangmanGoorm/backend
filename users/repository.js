const pool = require('../utils/db');
// const { customError } = require('../utils/errors/custom');
const { databaseError } = require('../utils/errors/database');

const checkNickname = async (nickname) => {
  const conn = await pool.getConnection();
  try {
    const checkSql = `
      SELECT nickname
      FROM users
      WHERE nickname = ?`
    ;
    const [checkRows] = await conn.query(checkSql, [nickname]);
    return checkRows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const signup = async (nickname, type) => {
  const conn = await pool.getConnection();
  try {
    const signupSql = `
      INSERT INTO users
      SET ?
    `;
    const [signupRows] = await conn.query(signupSql, { nickname, type });
    return signupRows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const getUser = async (id) => {
  const conn = await pool.getConnection();
  try {
    const checkSql = `
      SELECT *
      FROM users
      WHERE id = ?`
    ;
    const [checkRows] = await conn.query(checkSql, [id]);
    return checkRows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const updateUser = async (id, updateFields) => {
  const conn = await pool.getConnection();
  try {
    const updateSql = `
      UPDATE users
      SET ?
      WHERE id = ?`;
    const [updateRows] = await conn.query(updateSql, [updateFields, [id]]);
    return updateRows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

module.exports = {
  checkNickname,
  signup,
  getUser,
  updateUser,
}