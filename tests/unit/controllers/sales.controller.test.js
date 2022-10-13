const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockArrSales } = require("../mocks/mockSales");

const { salesService } = require("../../../src/services");
const { postMultipleSales } = require("../../../src/controllers/sales.controller");

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
})
