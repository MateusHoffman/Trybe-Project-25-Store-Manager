const connection = require('./connection');

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
  postSales,
};
