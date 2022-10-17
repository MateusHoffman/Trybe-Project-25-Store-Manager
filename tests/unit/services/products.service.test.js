const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAllProducts, mockGetOneProduct } = require("../mocks/mockProducts");
const { mockArrProductsForSale } = require("../mocks/mockSales");

const { productsModel, salesModel } = require("../../../src/models");
const { getAllProducts, getOneProduct, postProduct, putProduct, deleteProduct } = require("../../../src/services/products.service");

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
  })
  describe('putProduct', () => {
    it('Success', async () => {
      // PUT > products/1 > { id: 1, name: 'New name' }
      sinon
        .stub(productsModel, 'getById')
        .resolves({ id: 1, name: 'Current name' });
      sinon
        .stub(productsModel, 'put')
        .resolves({ affectedRows: 1 });
      await putProduct({ body: { name: "New name" }, params: { id: 1 } })
    })
    it('Error', async () => {
      // PUT > products/1 > { id: 1, name: 'New name' }
      sinon
        .stub(productsModel, 'getById')
        .resolves(undefined);
      sinon
        .stub(productsModel, 'put')
        .resolves({ affectedRows: 1 });

      await putProduct({ body: { name: "New name" }, params: { id: 1 } })
    })
  })
  describe('deleteProduct', () => {
    it('Success', async () => {
      sinon
        .stub(productsModel, 'getById')
        .resolves({ id: 1, name: 'Current name' });
      sinon
        .stub(productsModel, 'deleteById')
        .resolves({ affectedRows: 1 });

      await deleteProduct({ params: { id: 1 } })
    })
    it('Error', async () => {
      sinon
        .stub(productsModel, 'getById')
        .resolves(undefined);
      sinon
        .stub(productsModel, 'deleteById')
        .resolves({ affectedRows: 1 });

      await deleteProduct({ params: { id: 1 } })
    })
  })
  afterEach(sinon.restore);
})
