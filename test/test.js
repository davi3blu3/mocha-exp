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
        // also:
        // expect(arr).to.be.empty;
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

describe('Simple Function', function() {
    // subject of testing
    var addition = function(x, y) {
        return x + y;
    };
    
    // Tests
    it('should be an function', function() {
        expect(addition).to.be.an('Function');
    })
    
    // Asyncronous test? -- shows 'Pending'
    it('should add 1+2'), function() {
        var sum = addition(1,2);
        expect(sum).to.equal(3);
    }
});