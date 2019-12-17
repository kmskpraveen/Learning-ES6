// To destructure an array, to pull apart the elements of the array
var employee3 = ["Chandler", "Bing", "Male"];
var fname = employee3[0], lname = employee3[1], gender = employee3[2]; // Here destructuring of employee3 happens..
// .. the first 3 elements of the employee3 array assigned to the variables
//  we take individual elements in array and assign it to individual variables
console.log(fname);
console.log(lname);
console.log(gender);
// After the 1:1 mapping of variables, if we don't have any values to assign ..
// .. to the variable, undefined is going to assign
var employee4 = ["Chandler", "Bing"];
var fname1 = employee4[0], lname1 = employee4[1], gender1 = employee4[2];
console.log(fname1);
console.log(lname1);
console.log(gender1);
// We can also omit variables from the LHS
var employee5 = ["Chandler", "Bing", "Male"];
var gender2 = employee5[2];
console.log(gender2);
// We can also destructure using REST operator
var employee6 = ["Chandler", "Bing", "Male"];
var fname2 = employee6[0], elements = employee6.slice(1);
console.log(fname2);
console.log(elements);
// We can also do destructuring using default values
var employee7 = ["Chandler", "Bing"];
var fname3 = employee7[0], lname2 = employee7[1], _a = employee7[2], gender3 = _a === void 0 ? "Female" : _a;
console.log(fname3);
console.log(lname2);
console.log(gender3);
//# sourceMappingURL=tutorial17.js.map