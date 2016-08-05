// Import testing library
var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

// Import function(s) to be tested
var testFunc = require('../1LeapYears.js');

describe('Leap Years', function() {
    var func = testFunc.leapYear();
    
    it ('should return an array', function() {
        expect(func).to.be.instanceof(Array);
    });
    
    it ('should include 20 years', function() {
        expect(func.length).to.equal(20);
    });
    
    it ('first year should be 2016', function() {
        expect(func[0]).to.equal(2016);
    });
    
    it ('second year should be 2020', function() {
        expect(func[1]).to.equal(2020);
    });
    
    it ('last year should be 2092', function() {
        expect(func[func.length-1]).to.equal(2092);
    });
});