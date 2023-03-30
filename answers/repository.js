const pool = require('../utils/db');
const { databaseError } = require('../utils/errors/database');

const registry = async (fields) => {
  const conn = await pool.getConnection();
  try {
    const sql = `
      INSERT INTO answers
      SET ?
    `;
    const [rows] = await conn.query(sql, fields);
    return rows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const getAnswer = async (id) => {
  const conn = await pool.getConnection();
  try {
    const sql = `
      SELECT *
      FROM answers
      WHERE id = ?
    `;
    const [rows] = await conn.query(sql, [id]);
    console.log('rows: ', rows);
    return rows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const getAnswers = async (user_id) => {
  const conn = await pool.getConnection();
  try {
    const sql = `
      SELECT *
      FROM answers
      WHERE user_id = ?
      ORDER BY id DESC
    `;
    const [rows] = await conn.query(sql, [user_id]);
    return rows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const getAnswersByBottleId = async ({ id }) => {
  const conn = await pool.getConnection();
  try {
    const sql = `
      SELECT *
      FROM answers
      WHERE bottle_id = ?
    `;
    const [rows] = await conn.query(sql, [id]);
    return rows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const getAnswersForJuniorId = async (user_id) => {
  const conn = await pool.getConnection();
  try {
    const sql = `
      SELECT a.*
      FROM answers a
        LEFT JOIN bottles b ON b.id = a.bottle_id
      WHERE b.user_id = ?
    `;
    const [rows] = await conn.query(sql, [user_id]);
    return rows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

module.exports = {
  registry,
  getAnswer,
  getAnswers,
  getAnswersByBottleId,
  getAnswersForJuniorId,
}