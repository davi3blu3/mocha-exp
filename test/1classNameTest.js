var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var imports = require('../className.js');

describe('addClass', function() {
    it('should add class to element', function() {
        var element = { className: ''};
        
        imports.addClass(element, 'test-class');
        
        assert.equal(element.className, 'test-class');
    });

});