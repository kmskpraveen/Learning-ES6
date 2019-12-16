// 'const' keyword is used to read-only named constants
// similar to 'let', 'const' keyword are also block-scoped and not Hoisted
// However, a value must be set with 'const' declaration 
// and this value cannot be changed at later point in the scope
var num1;
var num2 = 10;
var obj1 = {
    name: "Joatmon"
};
console.log(obj1.name);
// obj1 = {} // doesn't work
// But assigning new values to the properties of the object works!
obj1.name = "Chandler";
console.log(obj1.name);
//# sourceMappingURL=tutorial8.js.map