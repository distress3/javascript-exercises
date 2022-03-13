const leapYears = function(year) {
    if (year % 4 == 0) { //check if year is divisible by 4
        if (year % 100 == 0) { //check if year is divisible by 100
            if (year % 400 == 0) { //check if year is divisible by 400
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
    // switch (year) {
    //     case (year % 4 != 0):
    //         return false;
    //     case (year % 4 == 0 && year % 100 != 0):
    //         return true;
    //     case (year % 100 == 0 && year % 400 != 0):
    //         return false;
    //     case (year % 100 == 0 && year % 400 == 0): 
    //         return true;
    // } 
};



// Do not edit below this line
module.exports = leapYears;
