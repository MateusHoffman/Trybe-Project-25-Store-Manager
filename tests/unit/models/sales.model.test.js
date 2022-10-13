const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { mockArrSales, mockArrAllSales, mockArrOneSale } = require("../mocks/mockSales");

const connection = require("../../../src/models/connection");
const { postSales, getAll, getById } = require("../../../src/models/sales.model");

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
  describe('Get one sale by id', () => {
    it('', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockArrOneSale);

      await getById(1);
    })
  })
  afterEach(sinon.restore);
})
