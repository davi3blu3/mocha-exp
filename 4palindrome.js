var exports = module.exports = {};

// Given a string, return all the palindromes that can be obtained by rearranging its characters.

exports.isPalindrome = function(string) {
    var i,
        j = string.length - 1;
    
    // compare first to last char, then second to second-last, etc
    for (i = 0; i < j; i += 1) {
        if (string[i] !== string[j]) {
            return false;
        };
        j -= 1;
    }    
    return true;
};

exports.createPalindrome = function(string) {
    var inputArray = string.split('').sort();
    var pairs = [];
    
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === inputArray[i+1]) {
            pairs.push(inputArray[i], inputArray[i+1]);
            i = -1;
            break;
        }
    }
    
    console.log(pairs);
    return string;
}

exports.createPalindrome("abcddeff");