var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert; 

describe ('A basic test', function() {
    it('should pass when test is set up properly', function() {
        expect(true).to.be.true;
    })
})

// Describe what you're testing
describe('Array', function() {
    // It block - describe a specific behavior you're testing
    it('should start empty', function() {
        var arr = [];
        
        assert.equal(arr.length, 0);
    })
})