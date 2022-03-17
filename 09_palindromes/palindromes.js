const palindromes = function (string) {
    // let punctuation = '!"#$%&\'()*+,-./:;<=>?@\ [\\]^_`{|}~';
    let stringLowerCase = string.toLowerCase()
    let punctuationLess = stringLowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_\ `~()]/g,"");
    let stringArray = punctuationLess.split('')
    // console.log(typeof stringArray);
    let newArray = Array.prototype.slice.call(stringArray);
    let reversedString = newArray.reverse()
    console.log(stringArray, reversedString);
    if (stringArray.toString() == reversedString.toString()) {
        return true;
    } else {
        return false;
    }
};

//doesnt actually reverse, probably because both reversedString
//and stringArray are references to the same array.

//fixed it to actually reverse but palindromes are still false?
//maybe i need to make it a string again
//removing spaces and making it to a string was correct.

// Do not edit below this line
module.exports = palindromes;
