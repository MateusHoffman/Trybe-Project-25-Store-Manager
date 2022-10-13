const mockArrProductsForSale = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 },
  { sale_id: 2, product_id: 3, quantity: 15 },
]

const mockArrProductsNotExist = [
  { sale_id: 1, product_id: 9999, quantity: 5 },
  { sale_id: 1, product_id: 8888, quantity: 10 },
  { sale_id: 2, product_id: 7777, quantity: 15 },
]

const mockArrSales = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const mockArrProductIdNotExist = [
  {
    "a": 1,
    "quantity": 1
  },
  {
    "c": 2,
    "quantity": 5
  }
]

const mockArrQuantityNotExist = [
  {
    "productId": 1,
    "a": 1
  },
  {
    "productId": 2,
    "b": 5
  }
]

const mockArrQuantitySmallerZero = [
  {
    "productId": 1,
    "quantity": 0
  },
  {
    "productId": 2,
    "quantity": 0
  }
]

const mockArrOneSale = [
  {
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 2,
    "quantity": 10
  }
]

const mockArrAllSales = [
  {
    "saleId": 1,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 3,
    "quantity": 15
  }
]

module.exports = {
  mockArrProductsForSale,
  mockArrSales,
  mockArrProductIdNotExist,
  mockArrQuantityNotExist,
  mockArrQuantitySmallerZero,
  mockArrProductsNotExist,
  mockArrAllSales,
}
