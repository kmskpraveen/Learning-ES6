// In ES6/ES2015, it is possible to have spaces in object properties
// Also, in ES6, we can also use variables as property names
let ln = "last name";
let person1 = {
    "first name": "Chandler", // need double-quotes as space is used in between
    [ln]: "Bing" // Should use []
};

console.log(person1["first name"]); // . Notation should not be used
console.log(person1);
