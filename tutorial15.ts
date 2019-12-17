let firstName  = "Chandler";
let lastName = "Bing";

// let person = { // Object literal
//     firstName: firstName,
//     lastName: lastName
// };
// When property name is same as variable name, we can reduce the object literal
let person = {
    firstName,
    lastName
}

function createPerson(firstName,lastName, age) {
    let fullName = firstName + " " + lastName;
    return {
        firstName, 
        lastName, 
        fullName, // Even ehen working with functions..
        // .. we can return firstName, lastName, and fullName without colon (:) and assignment
        // isSenior: function() {
        //     return age>60;
        // }}; // The shortcut in ES6 is when we've a function to a property, 
        // we can ignore 'function' keyword and colon (:)
        isSenior() {
            return age>60;
        }
    }
}

let p = createPerson("Ross","Geller",32);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());

// console.log(person.firstName);
// console.log(person.lastName);