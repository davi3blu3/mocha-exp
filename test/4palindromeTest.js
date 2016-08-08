// import Test methods
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

// import files to test
var test = require ('../4palindrome.js');

describe('does isPalindrome work?', function() {
    it('should return boolean', function() {
        expect(test.isPalindrome('abcde')).to.be.a('boolean');
    })
    
    it('should return true for tacocat', function() {
        expect(test.isPalindrome('tacocat')).to.equal(true);
    })
    
    it('should return true for toot', function() {
        expect(test.isPalindrome('toot')).to.equal(true);
    })
    
    it('should return false for persnickity', function() {
        expect(test.isPalindrome('persnickity')).to.equal(false);
    })        
});

describe('does createPalindrome work?', function() {
    it('should return a string', function() {
        expect(test.createPalindrome('hola')).to.be.a('string');
    })
    
    it('should return a palindrome', function() {
        var result = test.createPalindrome('abcdba');
        expect(test.isPalindrome(result)).to.equal(true);
    })
});