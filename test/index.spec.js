const chai = require('chai');
const expect = chai.expect;
const reqIndex = require('../index');
const validCard = reqIndex.cardValidator;


describe('cardValidator()', () => {
  it('Should return error: No Parameter found', () => {
    expect(validCard("")).to.equal(Error);
  });
  it('Should return true', () => {
    expect(validCard(3566002020360505)).to.equal(true);
  });

});