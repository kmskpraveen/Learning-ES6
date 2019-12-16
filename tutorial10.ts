var getRegValue = function() {
    return 10;
}
console.log(getRegValue());

let getArrowValue = () => {
    return 20;
}
console.log(getArrowValue());

// Arrow functions are short and concise

// If we have to specify a function body with multiple lines,
// we've to enclose them in curly braces and you also have return keyword stated explicitly

// Note: When you pass a single arguement, we can ommit parenthesis
let getArrowValue2 = (m,bonus) => 10*m+bonus;
console.log(getArrowValue2(5,50));

console.log(typeof getArrowValue); // a function