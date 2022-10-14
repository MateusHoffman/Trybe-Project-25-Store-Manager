const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const {
  mockArrProductsForSale, mockArrSales, mockArrProductIdNotExist, mockArrQuantityNotExist,
  mockArrQuantitySmallerZero, mockArrProductsNotExist, mockArrAllSales, mockArrOneSale
} = require("../mocks/mockSales");
const { postSalesValidate } = require("../../../src/services/validations/fieldValidation");

const { salesModel } = require("../../../src/models");
const { postMultipleSales, getAllSales, getOneSale } = require("../../../src/services/sales.service");

describe('Unit Test - salesServices', () => {
	describe('Field validation', () => {
    it('Success', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrSales, mockArrSales.length);
		})
    it('Field ProductId Not Exist', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrProductIdNotExist, mockArrProductIdNotExist.length);
		})
    it('Field Quantity Not Exist', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrQuantityNotExist, mockArrQuantityNotExist.length);
		})
    it('Field Quantity <= 0', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrQuantitySmallerZero, mockArrQuantitySmallerZero.length);
		})
    it('Product not exist', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsNotExist);

      await postSalesValidate(mockArrSales, mockArrSales.length);
    })
  })
  describe('Post multiple sales', () => {
    it('Return: { status: 201, response: { id, itemsSold: [...arrSales] } }', async () => {
      await postMultipleSales({ body: mockArrSales })
    })
    it('Return: { status: 201, response: { id, itemsSold: [...arrSales] } }', async () => {
      await postMultipleSales({ body: mockArrProductIdNotExist })
    })
  })
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
  afterEach(sinon.restore);
})
