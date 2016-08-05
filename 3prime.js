var exports = module.exports = {};

// A prime number is a whole number greater than 1, whose only two whole-number factors are 1 and itself.

exports.isPrime = function(num) {
    
    // is input a number?
    if (typeof num !== 'number') {
        return false;
    }
    
    // is input a whole number?
    if (num % 1 !== 0) {
        return false;
    }
    
    // if num is less than of equal to one, return false
    if ( num <= 1 ) {
        return false;
        
    // else if (num - 1) is equal to 1, return false    
    } else if ( (num - 1) === 1 ) {
        return false;
       
    } else {
        // else if num % (range: 2 - num-1) = 0, return false 
        for (var i = 2; i < num; i += 1) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        // else return true
        return true;  
    }
    
};