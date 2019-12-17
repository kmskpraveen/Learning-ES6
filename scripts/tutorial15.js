var firstName = "Chandler";
var lastName = "Bing";
// let person = { // Object literal
//     firstName: firstName,
//     lastName: lastName
// };
// When property name is same as variable name, we can reduce the object literal
var person = {
    firstName: firstName,
    lastName: lastName
};
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        // .. we can return firstName, lastName, and fullName without colon (:) and assignment
        // isSenior: function() {
        //     return age>60;
        // }}; // The shortcut in ES6 is when we've a function to a property, 
        // we can ignore 'function' keyword and colon (:)
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Geller", 32);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
// console.log(person.firstName);
// console.log(person.lastName);
//# sourceMappingURL=tutorial15.js.map