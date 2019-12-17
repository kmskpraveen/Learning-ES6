// In ES5 or JavaScript, when the parameter is not specified for a function
// giving its call, then the value would be undefined.
let getValue = function(value) {
    console.log(value);
}
getValue(); // undefined

let percentBonus = () => 0.1;
// You can use variables or functions while assigning default values to the parameters
// Also you can assign left default value parameters to right but not opposite
let getValue2 = function(value=10,bonus=value*percentBonus()) { // here default value of value is 10
    console.log(value,bonus);
    console.log(arguments.length); // Considers only no. of parameters passed and
    // ...ignores default values
}
getValue2(); // 10 1 \n 0
getValue2(20); // 20 2 \n 1
getValue2(20,30); // 20 30 \n 2
getValue2(undefined,30); // 10 30 \n 2