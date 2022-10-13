const connection = require('./connection');

const getAll = async () => {
  const sqlQuery = `
    SELECT
    (sp.sale_id) AS saleId,
    (s.date) AS date,
    (sp.product_id) AS productId,
    (sp.quantity) AS quantity
  FROM StoreManager.sales_products AS sp
    JOIN StoreManager.sales AS s ON s.id = sp.sale_id
      ORDER BY sp.sale_id ASC, sp.product_id ASC
  `;
  const [sales] = await connection.execute(sqlQuery);
  return sales;
};

const getById = async (id) => {
  const sqlQuery = `
    SELECT
      (s.date) AS date,
      (sp.product_id) AS productId,
      (sp.quantity) AS quantity
    FROM StoreManager.sales_products AS sp
      JOIN StoreManager.sales AS s ON s.id = sp.sale_id
        WHERE sp.sale_id = ?
  `;
  const [sale] = await connection.execute(sqlQuery, [id]);
  return sale;
};

const getAllProductsSale = async () => {
  const sqlQuery = `
    SELECT *
    FROM StoreManager.sales_products;
  `;
  const [productsForSale] = await connection.execute(sqlQuery);
  return productsForSale;
};

const postSales = async (arrSales) => {
  const sqlQuery = `
    INSERT INTO StoreManager.sales
    (date)
    VALUES
    (current_timestamp())
  `;
  const [{ insertId }] = await connection.execute(sqlQuery);

  const promises = [];

  arrSales.forEach((sale) => {
    const sqlQuery2 = `
    INSERT INTO StoreManager.sales_products
    (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`;
    const insertItem = connection.execute(sqlQuery2, [insertId, sale.productId, sale.quantity]);
    promises.push(insertItem);
  });

  await Promise.all(promises);
  return insertId;
};

module.exports = {
  getAllProductsSale,
  getAll,
  getById,
  postSales,
};
