var displayColors = function () {
    console.log(message);
    for (var i_1 in arguments) {
        console.log(arguments[i_1]);
    }
};
var message = "List of Colors";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');
// The above would become a problem, "List of Colors" will print twice
// But in ES6/ES2015, it is dealt differently -> Rest parameter 
// Rest parameter (...) represents an indefinite no. of arguements into an array
var displayColors2 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i_2 in colors) {
        console.log(colors[i_2]);
    }
};
displayColors2(message, 'Red');
displayColors2(message, 'Red', 'Blue');
displayColors2(message, 'Red', 'Blue', 'Green');
//# sourceMappingURL=tutorial13.js.map