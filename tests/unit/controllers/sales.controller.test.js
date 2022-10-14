const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockArrSales, mockArrAllSales, mockArrOneSale } = require("../mocks/mockSales");

const { salesService } = require("../../../src/services");
const { postMultipleSales, getAllSales, getOneSale, deleteOneSale } = require("../../../src/controllers/sales.controller");

describe('Unit Test - salesController', () => {
	describe('Post multiple sales', () => {
		it('Status: 201; Response: { id, itemsSold: [...arrSales] } }', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'postMultipleSales')
        .resolves({ status: 201, response: { id: 1, itemsSold: [...mockArrSales] } });

      await postMultipleSales(req, res);
		})
	})
  describe('Get all sales', () => {
    it('{ status: 200, response: [{}, {}, ...] }', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'getAllSales')
        .resolves({ status: 200, response: mockArrAllSales });

      await getAllSales(req, res);
    })
  })
	describe('Get one sale by Id', () => {
		it('{ status: 200, response: [{}, {}, ...] }', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'getOneSale')
        .resolves({ status: 200, response: mockArrOneSale });

      await getOneSale(req, res);
		})
	})
	describe('DELETE', () => {
		it('204', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'deleteOneSale')
        .resolves({ status: 204 });

      await deleteOneSale(req, res);
		})
	})
})
