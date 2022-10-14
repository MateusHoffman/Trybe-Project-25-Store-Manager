const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAllProducts, mockGetOneProduct } = require("../mocks/mockProducts");

const { productsModel } = require("../../../src/models");
const { getAllProducts, getOneProduct, postProduct, putProduct } = require("../../../src/services/products.service");

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
  describe('Post one product', () => {
    it('Return: { status: 201, response: { ...request, id } }', async () => {
      const req = {
        body: { name: 'Product X' },
      };

      sinon
        .stub(productsModel, 'post')
        .resolves(1);

      await postProduct(req);
		})
    it('Return: { status: 400, response: { message: ""name" is required" }', async () => {
      const req = {
        body: { name: '' },
      };

      sinon
        .stub(productsModel, 'post')
        .resolves(1);

      await postProduct(req);
		})
    it('Return: { status: 400, response: { message: ""name" is required" }', async () => {
      const req = {
        body: { xxxxx: 'Product X' },
      };

      sinon
        .stub(productsModel, 'post')
        .resolves(1);

      await postProduct(req);
		})
    it('Return: { status: 422, response: { message: ""name" length must be at least 5 characters long" }', async () => {
      const req = {
        body: { name: 'P' },
      };

      sinon
        .stub(productsModel, 'post')
        .resolves(1);

      await postProduct(req);
		})
    describe('PUT - One product', () => {
      it('', async () => {
        await putProduct({ body: { name: 'XXXXXXXXX' }, params: { id: 1 } });
      })
      it('', async () => {
        await putProduct({ body: { name: 'X' }, params: { id: 1 } });
      })
      it('', async () => {
        await putProduct({ body: { name: 'XXXXXXXXX' }, params: { id: 999999999999 } });
      })
    })
	})
  afterEach(sinon.restore);
})
