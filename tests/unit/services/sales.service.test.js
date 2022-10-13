const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const {
  mockArrProductsForSale, mockArrSales, mockArrProductIdNotExist, mockArrQuantityNotExist,
  mockArrQuantitySmallerZero, mockArrProductsNotExist
} = require("../mocks/mockSales");

const { salesModel } = require("../../../src/models");
const { postMultipleSales } = require("../../../src/services/sales.service");
const fieldValidation = require("../../../src/services/validations/fieldValidation");
const { postSalesValidate } = require("../../../src/services/validations/fieldValidation");

describe('Unit Test - salesServices', () => {
	describe('Field validation', () => {
    it('Success', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrSales);
		})
    it('Field ProductId Not Exist', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrProductIdNotExist);
		})
    it('Field Quantity Not Exist', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrQuantityNotExist);
		})
    it('Field Quantity <= 0', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsForSale);

      await postSalesValidate(mockArrQuantitySmallerZero);
		})
    it('Product not exist', async () => {
      sinon
        .stub(salesModel, 'getAllProductsSale')
        .resolves(mockArrProductsNotExist);

      await postSalesValidate(mockArrSales);
    })
  })
  describe('Post multiple sales', () => {
    it('Return: { status: 201, response: { id, itemsSold: [...arrSales] } }', async () => {
      // sinon
      //   .stub(fieldValidation, 'postSalesValidate')
      //   .resolves(undefined);
      await postSalesValidate(mockArrSales);
      sinon
        .stub(salesModel, 'postSales')
        .resolves(1);

      await postMultipleSales(mockArrSales);
    })
  })
  afterEach(sinon.restore);
})
