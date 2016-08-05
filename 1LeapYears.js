// Write a program that returns the next 20 leap years.

exports = module.exports = {};

exports.leapYear = function() {
    var year = 2016,
        leaps = [];
    
    while (leaps.length < 20) {
        leaps.push(year);
        year += 4;
    }
    
    return leaps;
};