var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
var getArrowValue = function () {
    return 20;
};
console.log(getArrowValue());
// Arrow functions are short and concise
// If we have to specify a function body with multiple lines,
// we've to enclose them in curly braces and you also have return keyword stated explicitly
// Note: When you pass a single arguement, we can ommit parenthesis
var getArrowValue2 = function (m, bonus) { return 10 * m + bonus; };
console.log(getArrowValue2(5, 50));
console.log(typeof getArrowValue); // a function
//# sourceMappingURL=tutorial10.js.map