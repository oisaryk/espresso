const assert = require('assert');
const expect = require('chai').expect;
// const assert = require('chai').assert;
const helpers = require('../utils/helpers');

describe('Helpers functions', () => {
    describe('Sum function', () => {
        it('Should return sum of numbers', () => {
            const result = helpers.sum(1,2);
            assert.equal(result, 3);
        });
        it('Should return sum of numbers (with expect)', () => {
            const result = helpers.sum(1,2);
            expect(result).to.be.equal(3);
            expect(result).to.deep.equal(3);
            expect(result).not.to.be.equal(4);
        });
        it('Should return NaN', () => {
            const result = helpers.sum(1,undefined);
            //assert.equal(Number.isNaN(result), true);
            assert.equal(result, NaN);
        });
        it('Should return wrong sum of numbers', () => {
            const result = helpers.sum(1,2);
            assert.notEqual(result, 5);
        });
    });
    describe('isString function', () => {
        it('Should return true when input is string', () => {
            const result = helpers.isString('Sasha');
            assert.equal(result, true);
        });

        it('Should return false when input is number', () => {
            const result = helpers.isString(2);
            assert.equal(result, false);
        });

        it.skip('Should return boolean when input is whatever', () => {
            const result = helpers.isString(2);
            assert.typeOf(result, 'boolean');
        });
    })
});
