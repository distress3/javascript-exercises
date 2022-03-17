const findTheOldest = function(array){
    const date = new Date();
    array.forEach(element => {
        if (!element.yearOfDeath){
            element.yearOfDeath = date.getFullYear();
        }
        element.age = checkAge(element.yearOfBirth, element.yearOfDeath);
    });
    let sortedArray = array.sort((c1, c2) => (c1.age < c2.age) ? 1 : (c1.age > c2.age) ? -1 : 0);
    console.log(sortedArray[0])
    return sortedArray[0];
};

function checkAge (yearOfBirth, yearOfDeath){
    return age = yearOfDeath - yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
