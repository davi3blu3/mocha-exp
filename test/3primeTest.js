// Import test library
var chai = require('chai');
var expect = chai.expect;

// Import test file
var test = require('../3prime.js');

describe('isPrime function', function() {
    
    it('should return a boolean', function() {
        expect(test.isPrime(2)).to.be.a('boolean');
    });
    
    it('0 should return false', function() {
        expect(test.isPrime(0)).to.equal(false);  
    });
    
    it('3 should return true', function() {
        expect(test.isPrime(3)).to.equal(true);  
    });
    
    it('4 should return false', function() {
        expect(test.isPrime(4)).to.equal(false);  
    });
    
    it('75 should return false', function() {
        expect(test.isPrime(75)).to.equal(false);
    });
    
    it('89 should return true', function() {
        expect(test.isPrime(89)).to.equal(true);
    });
    
    it('string should return false', function() {
        expect(test.isPrime("your mom")).to.equal(false);  
    });
    
    it('floats should return false', function() {
        expect(test.isPrime(7.5)).to.equal(false);
    });
    
});