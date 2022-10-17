const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockArrSales, mockArrAllSales, mockArrOneSale } = require("../mocks/mockSales");

const connection = require("../../../src/models/connection");
const { postSales, getAll, getById, deleteById, getSaleById, deleteSaleProductsById, postSaleUpdate } = require("../../../src/models/sales.model");

describe('Unit Test - salesModels', () => {
  describe('Post multiple sales', () => {
    it('Return object with one product', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{ insertId: 10 }]);

      await postSales(mockArrSales);
    })
  })
  describe('Get all sales', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockArrAllSales);

      await getAll();
    })
  })
	describe('getById', () => {
    it('1', async () => {
      const res = [ { "date": "2022-10-17T19:12:53.000Z", "productId": 3, "quantity": 15 } ]
      sinon
        .stub(connection, 'execute')
        .resolves(res);

      await getById(1);
		})
	})
	describe('deleteById', () => {
    it('1', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{}]);

      await deleteById(1);
		})
	})
	describe('getSaleById', () => {
    it('1', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([[{}]]);

      await getSaleById(1);
		})
	})
	describe('deleteSaleProductsById', () => {
    it('1', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{}]);

      await deleteSaleProductsById(1);
		})
	})
	describe('postSaleUpdate', () => {
    it('1', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves();

      await postSaleUpdate([{productId: 1, quantity: 4}], 1);
		})
	})
  afterEach(sinon.restore);
})
