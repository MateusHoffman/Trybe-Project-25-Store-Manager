const snakeize = require('snakeize');
const connection = require('./connection');

const getAll = async () => {
  const sqlQuery = `
    SELECT *
    FROM StoreManager.products;
  `;
  const [products] = await connection.execute(sqlQuery);
  return products;
};

const getById = async (id) => {
  const sqlQuery = `
    SELECT *
    FROM StoreManager.products
    WHERE id = ?
  `;
  const [[products]] = await connection.execute(sqlQuery, [id]);
  return products;
};

const post = async (request) => {
  const columns = Object.keys(snakeize(request))
    .map((key) => `${key}`)
    .join(', ');
  const values = Object.keys(request)
    .map((_key) => '?')
    .join(', ');

  const sqlQuery = `
    INSERT INTO StoreManager.products
    (${columns})
    VALUES
    (${values})
  `;
  const [{ insertId }] = await connection.execute(sqlQuery, [...Object.values(request)]);
  return insertId;
};

module.exports = {
  getAll,
  getById,
  post,
};
