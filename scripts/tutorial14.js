var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Spread Operator is kind of opposite to Rest operator
// It takes an array and split it into elements
var displayColors3 = function (mesg) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(mesg);
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var mesg = "List of Colors";
var colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors3.apply(void 0, __spreadArrays([mesg], colorArray)); // Spread operator is used here
// Rest Operator is specified in function declaration
// Spread Operator is specified during function call
//# sourceMappingURL=tutorial14.js.map