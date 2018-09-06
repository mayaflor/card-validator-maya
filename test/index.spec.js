const chai = require('chai');
const expect = chai.expect;
const reqIndex = require('../index');
const validCard = reqIndex.cardValidator;


describe('cardValidator()', () => {
  describe('When given an empty input', () => {
    it('Should return error: Type a credit card number', () => {
      expect(() => (validCard(''))).to.throw(Error, 'Type a credit card number');
    });
  });
  describe('When given a valid card number', () => {
    it('Should return true', () => {
      expect(validCard(36490102462661)).to.equal(true);
    });
  });
  describe('When given an invalid card number', () => {
    it('Should return false', () => {
      expect(validCard(3649010249879767)).to.equal(false);
    });
  });
  describe('When given a string', () => {
    it('Should return error: Type only numbers', () => {
      expect(() => (validCard('36490102462661'))).to.throw(Error, 'Type only numbers');
    });
  });
  describe('When given an input of one number', () => {
    it('Should return error: Type a valid amount of numbers', () => {
      expect(() => (validCard(2))).to.throw(Error, 'Type a valid amount of numbers');
    });
  });

});