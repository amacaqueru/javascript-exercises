const leapYears = function(year) {


        if (year % 100 == 0 && year % 400 == 0 && year % 4 ==0){
            return true;
        }else if (year %4 == 0 && year%100 != 0 && year %400 != 0){
            return true;
        }
        else{
            return false;
        }


        // console.log("yes");
        // return true;

    };

// Do not edit below this line
module.exports = leapYears;



////////////////////////////


// leapYears(1984);