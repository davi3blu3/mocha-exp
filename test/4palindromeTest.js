// import Test methods
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

// import files to test
var test = require ('../4palindrome.js');

describe('is palindrome', function() {
    it('should return boolean', function() {
        expect(test.isPalindrome('abcde')).to.be.a('boolean');
    })
    
    it('should return true for tacocat', function() {
        expect(test.isPalindrome('tacocat')).to.equal(true);
    })
    
    it('should return true for aibohphobia', function() {
        expect(test.isPalindrome('aibohphobia')).to.equal(true);
    })
    
    it('should return true for toot', function() {
        expect(test.isPalindrome('toot')).to.equal(true);
    })
    
    it('should return false for google', function() {
        expect(test.isPalindrome('google')).to.equal(false);
    })      
    
    it('should return false for spacecars', function() {
        expect(test.isPalindrome('spacecars')).to.not.equal(true);
    })    
});