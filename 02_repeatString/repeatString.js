const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR";
    }

    let i = 0;
    let frase= "";

    while (i < num){
        frase = frase + string;
        console.log(frase);

        i++;
    }
    return frase;


};

// Do not edit below this line
module.exports = repeatString;

///////////////////////////////////////////////////////



