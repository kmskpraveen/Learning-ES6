var _a;
// In ES6/ES2015, it is possible to have spaces in object properties
// Also, in ES6, we can also use variables as property names
var ln = "last name";
var person1 = (_a = {
        "first name": "Chandler"
    },
    _a[ln] = "Bing" // Should use []
,
    _a);
console.log(person1["first name"]); // . Notation should not be used
console.log(person1);
//# sourceMappingURL=tutorial16.js.map