for (var i = 1; i <= 5; i++) {
    console.log(i);
} // prints 1 to 5 numbers
for (var i = 1; i <= 5; i++) {
    setTimeout(function () { console.log(i); }, 1000);
} // prints 6 (5 times)
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 1000);
};
// This is because of 'var'..
// In order to achieve the desired reult,
// use Immediately invoked function expression or 'let'
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
} // prints 1 to 5 numbers
//# sourceMappingURL=tutorial7.js.map