const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const {
  mockArrProductsForSale, mockArrSales, mockArrProductIdNotExist, mockArrQuantityNotExist,
  mockArrQuantitySmallerZero, mockArrProductsNotExist, mockArrAllSales, mockArrOneSale
} = require("../mocks/mockSales");mockArrProductsForSale

const { salesModel } = require("../../../src/models");
const { postMultipleSales, getAllSales, getOneSale, deleteOneSale, putOneSale } = require("../../../src/services/sales.service");
const { validateNewSale } = require("../../../src/services/validations/validation");

describe('Unit Test - salesServices', () => {
  describe('Get all sales', () => {
    it('{ status: 200, response: sales }', async () => {
      sinon
        .stub(salesModel, 'getAll')
        .resolves(mockArrAllSales);

      await getAllSales();
    })
  })
  describe('Get one sale by id', () => {
    it('{ status: 200, response: sales }', async () => {
      req = {
        params: { id: 1 }
      }
      sinon
        .stub(salesModel, 'getById')
        .resolves(mockArrOneSale);

      await getOneSale(req);
    })
    it('{ status: 404, response: { message: "Sale not found" } }', async () => {
      req = {
        params: { id: 99999 }
      }
      sinon
        .stub(salesModel, 'getById')
        .resolves([]);

      await getOneSale(req);
    })
  })
  describe('deleteOneSale', () => {
    it('1', async () => {
      sinon
        .stub(salesModel, 'getSaleById')
        .resolves({ id: 1, date: '2022-10-17T19:12:53.000Z' });
      sinon
        .stub(salesModel, 'deleteById')
        .resolves(null);

      await deleteOneSale({params: { id: 1 }});
    })
    it('2', async () => {
      sinon
        .stub(salesModel, 'getSaleById')
        .resolves(undefined);
      sinon
        .stub(salesModel, 'deleteById')
        .resolves(null);

      await deleteOneSale({params: { id: 1 }});
    })
  })
  describe('POST', () => {
    it('postMultipleSales', async () => {
      sinon
        .stub(salesModel, 'postSales')
        .resolves(1);

      await postMultipleSales(mockArrSales);
    })
  })
  describe('PUT', () => {
    it('putOneSale', async () => {
      const updateSale = [ { "productId": 1, "quantity": 10 }, { "productId": 2, "quantity": 50 } ]
      sinon
        .stub(salesModel, 'getSaleById')
        .resolves({ id: 1, date: '2022-10-17T19:12:53.000Z' });
      sinon
        .stub(salesModel, 'deleteSaleProductsById')
        .resolves(null);
      sinon
        .stub(salesModel, 'postSaleUpdate')
        .resolves(null);

      await putOneSale({ params: { id: 1 }, body: updateSale });
    })
    it('putOneSale', async () => {
      const updateSale = [ { "productId": 1, "quantity": 10 }, { "productId": 2, "quantity": 50 } ]
      sinon
        .stub(salesModel, 'getSaleById')
        .resolves(undefined);
      sinon
        .stub(salesModel, 'deleteSaleProductsById')
        .resolves(null);
      sinon
        .stub(salesModel, 'postSaleUpdate')
        .resolves(null);

      await putOneSale({ params: { id: 1 }, body: updateSale });
    })
  })
  describe('validateNewSale', () => {
    it('1', async () => {
      await validateNewSale({ productId: 5, quantity: 5, })
    })
    it('2', async () => {
      await validateNewSale({ productId: 5, quantity: 0, })
    })
    it('2', async () => {
      await validateNewSale({ xxx: 5, yyy: 5, })
    })
  })
  afterEach(sinon.restore);
})
