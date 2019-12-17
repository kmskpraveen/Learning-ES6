// To destructure an array, to pull apart the elements of the array

let employee3 = ["Chandler", "Bing", "Male"];

let [fname, lname, gender] = employee3; // Here destructuring of employee3 happens..
// .. the first 3 elements of the employee3 array assigned to the variables
//  we take individual elements in array and assign it to individual variables

console.log(fname);
console.log(lname);
console.log(gender);

// After the 1:1 mapping of variables, if we don't have any values to assign ..
// .. to the variable, undefined is going to assign
let employee4 = ["Chandler", "Bing"];

let [fname1, lname1, gender1] = employee4; 

console.log(fname1);
console.log(lname1);
console.log(gender1);

// We can also omit variables from the LHS
let employee5 = ["Chandler", "Bing", "Male"];

let [, , gender2] = employee5;
console.log(gender2);

// We can also destructure using REST operator
let employee6 = ["Chandler", "Bing", "Male"];

let [fname2, ...elements] = employee6;
console.log(fname2);
console.log(elements);

// We can also do destructuring using default values
let employee7 = ["Chandler", "Bing"];

let [fname3, lname2, gender3="Female"] = employee7;
console.log(fname3);
console.log(lname2);
console.log(gender3);