'use strict'

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('A basic test', function() {
    it('should pass when test is set up properly', function() {
        expect(true).to.be.true;
    })
});

// Describe what you're testing
describe('Empty Array', function() {
    // subject of testing
    var arr = [];
    
    // It block - describe a specific behavior you're testing
    it('should start empty', function() {
        assert.equal(arr.length, 0);
    })
    
    it('should not be undefined', function() {
        expect(typeof arr).to.not.be.undefined;
    })
    
    it('should not be a null', function() {
        expect(typeof arr).to.not.be.a('null');
    })

    it('should not be a number', function() {
        expect(typeof arr).to.not.be.a('number');
    })
    
    it('should not be a boolean', function() {
        expect(typeof arr).to.not.be.a('boolean');
    })
    
    it('first index should be undefined', function() {
        expect(arr[0]).to.be.undefined;
    })
    
});