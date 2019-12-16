// It is recommended to use 'const' keyword over 'let' keyword
// Because, most of the variables we use require 1 time initialization
// and they were never really re-assign
// Also by using the 'const' keyword, it helps us to identify the variables
// that are getting re-assigned when that really wasn't our intention.
// Use 'let' when re-assignment is expected and
// Use 'const' when a new value assignment is not expected
// Some examples
var PI = 3.14; // used for area of circles
var MAX_SIZE = 100; // max size of array
var x = 5;
var y = 10;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);
//# sourceMappingURL=tutorial9.js.map