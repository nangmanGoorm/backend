const pool = require('../utils/db');
const { databaseError } = require('../utils/errors/database');

const registry = async (fields) => {
  const conn = await pool.getConnection();
  try {
    const sql = `
      INSERT INTO bottles
      SET ?
    `;
    const [row] = await conn.query(sql, fields);
    return row;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const getBottle = async (id) => {
  const conn = await pool.getConnection();
  try {
    const bottleSql = `
      SELECT *
      FROM bottles
      WHERE id = ?`;
    const [bottleRows] = await conn.query(bottleSql, [id]);
    return bottleRows
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const getBottles = async (user_id) => {
  const conn = await pool.getConnection();
  try {
    const sql = `
      SELECT bottles.*, count(answers.id) as answer_count
      FROM bottles
          LEFT JOIN answers ON bottles.id = answers.bottle_id
      WHERE bottles.user_id = ?
      GROUP BY bottles.id
      ORDER BY bottles.id ASC
    `;
    const [rows] = await conn.query(sql, [user_id]);
    return rows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

const getBottlesByCategory = async (category) => {
  const conn = await pool.getConnection();
  try {
    const sql = `
      SELECT *
      FROM bottles
      WHERE category = ?
      ORDER BY id DESC
    `;
    const [rows] = await conn.query(sql, [category]);
    return rows;
  } catch (err) {
    throw databaseError(err);
  } finally {
    await conn.release();
  }
};

module.exports = {
  registry,
  getBottle,
  getBottles,
  getBottlesByCategory,
}