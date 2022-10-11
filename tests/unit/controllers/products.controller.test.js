const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAllProducts, mockGetOneProduct } = require("../mocks/mockProducts");

const { productsService } = require("../../../src/services");
const { getAllProducts, getOneProduct } = require("../../../src/controllers/products.controller");

describe('Unit Test - productsController', () => {
	describe('Get all products', () => {
    it('Status: 200; Response: Complete array products', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'getAllProducts')
        .resolves({ status: 200, response: mockGetAllProducts });

      await getAllProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockGetAllProducts);
		})
	})
	describe('Get one product', () => {
		it('Status: 200; Response: One product base Id', async () => {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'getOneProduct')
        .resolves({ status: 200, response: mockGetOneProduct });

      await getOneProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockGetOneProduct);
		})
	})
})
