const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAllProducts, mockGetOneProduct } = require("../mocks/mockProducts");

const { productsModel } = require("../../../src/models");
const { getAllProducts, getOneProduct } = require("../../../src/services/products.service");

describe('Unit Test - productsServices', () => {
	describe('Get all products', () => {
    it('Return complete array', async () => {
      sinon
        .stub(productsModel, 'getAll')
        .resolves(mockGetAllProducts);

      await getAllProducts();
		})
	})
	describe('Get one product', () => {
		it('Return object with one product', async () => {
      const req = {
        params: { id: 1 },
      };

      sinon
        .stub(productsModel, 'getById')
        .resolves(mockGetOneProduct);

      await getOneProduct(req);
		})
		it('Return nothing', async () => {
      const req = {
        params: { id: 99999 },
      };

      sinon
        .stub(productsModel, 'getById')
        .resolves(undefined);

      await getOneProduct(req);
		})
	})
  afterEach(sinon.restore);
})
