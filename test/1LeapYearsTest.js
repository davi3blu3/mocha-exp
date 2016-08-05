// Import testing library
var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

// Import function(s) to be tested
var testFunc = require('../1LeapYears.js');

describe('Leap Years', function() {
    it ('should return an array', function() {
        expect(testFunc.leapYear()).to.be.instanceof(Array);
    });
    
    it ('should include 20 years', function() {
        expect(testFunc.leapYear().length).to.equal(20);
    });
    
    it ('first year should be 2016');//, function() {});
});