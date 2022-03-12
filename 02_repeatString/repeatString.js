const repeatString = function(string, index) {
    let catString = '';
    if (index < 0) {
        catString += 'ERROR';
        return catString;
    }
    for (let i = 0; i < index; i++){
        catString += string;
    }
    return catString
};

// Do not edit below this line
module.exports = repeatString;
