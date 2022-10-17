const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockGetAllProducts, mockGetOneProduct } = require("../mocks/mockProducts");

const connection = require("../../../src/models/connection");
const { getAll, getById, post, deleteById, put, getAllByQuery } = require("../../../src/models/products.model");

describe('Unit Test - productsModels', () => {
	describe('Get all products', () => {
    it('Return complete array', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockGetAllProducts);

      await getAll();
		})
	})
	describe('Get one product', () => {
		it('Return object with one product', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([[mockGetOneProduct]]);

      await getById(1);
		})
	})
	describe('post', () => {
    it('1', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([1]);

      await post({ name: 'Product X' });
		})
	})
	describe('put', () => {
    it('1', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{}]);

      await put('Product X', 1);
		})
    it('2', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([undefined]);

      await put('Product X', 1);
		})
	})
	describe('deleteById', () => {
    it('1', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([{}]);

      await deleteById(1);
		})
    it('2', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([undefined]);

      await deleteById(1);
		})
	})
	describe('getAllByQuery', () => {
    it('1', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([[{}, {}]]);

      await getAllByQuery('Nome');
		})
	})
  afterEach(sinon.restore);
})
