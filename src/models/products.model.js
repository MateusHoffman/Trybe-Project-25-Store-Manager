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

module.exports = {
  getAll,
  getById,
};
