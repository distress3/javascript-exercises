const reverseString = function(string) {
    let eachLetterArray = string.split('');
    let backwards = eachLetterArray.reverse();
    let backwardsString = backwards.join('');
    return backwardsString
};

// Do not edit below this line
module.exports = reverseString;


//take a string as parameter
//break string into array and store it in variable eachLetterArray
    //.split()
//reverse order of items in eachLetterArray with method .reverse()
//make eachLetterArray into a string with .join('')
//return eachLetterArray