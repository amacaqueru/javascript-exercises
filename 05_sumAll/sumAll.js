const sumAll = function(first, last) {

    if (Number.isInteger(first) && Number.isInteger(last) && first >= 0 && last >=0){
        let order = 0;

        if(first > last){
            order = last;
            last = first;
            first = order;
        }

        let sum = 0;
        for(let i = first; i<= last; i++){
            sum = sum +i;
            console.log(sum);
        }
        return sum;
        }
        else{
            return "ERROR";
        }
};

// Do not edit below this line
module.exports = sumAll;




// sumAll(1,4);