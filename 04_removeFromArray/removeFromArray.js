const removeFromArray = function(...args) {

    // let newArray = Array.from(removeArray);
    // console.log(Array.from("foo"));

    // simpleArray = simpleArray.filter(item => !newArray.includes(item));

    // console.log(simpleArray); // [1, 4, 5]


    // return simpleArray;

// console.log(arguments.length);

let newArray = [];

for (let i = 1; i < arguments.length; i++){
    // console.log(`log: ${i}`);
    newArray.push(arguments[i])
    // console.log(newArray);
}
let simpleArray = arguments[0];

simpleArray = simpleArray.filter(item => !newArray.includes(item));

console.log(simpleArray);
return simpleArray;

};

// Do not edit below this line
module.exports = removeFromArray;


// let potato = [1, 2, 3, 4, 5];
// let toRemove = 3; // Aquí puedes poner cualquier número o lista de números que quieras eliminar


// removeFromArray(potato, 1);