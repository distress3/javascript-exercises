const removeFromArray = function(array) {
    let unwantedPlace;
    for (let i = 1; i <= arguments.length; i++){
        if (array.includes(arguments[i])){
            unwantedPlace = array.indexOf(arguments[i]);
            if (array[unwantedPlace] === arguments[i]){
                array.splice([unwantedPlace], 1);
            }
        }
    }
    return array;
};



// Do not edit below this line
module.exports = removeFromArray;