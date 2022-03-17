const getTheTitles = function(array) {
    //something with forEach?
    let titlesArray = [];
    array.forEach(element => {
        titlesArray.push(element.title);
    });
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
