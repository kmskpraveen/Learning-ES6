// Hoisting in Javascript is that all the var declarations 
// is moved to top of the function. So, the below function is valid.

// Also var declaration has functional scope. It doesn't matter if you declare it in if block or so
// So, var greet = "Hello Chandler" and deletion of var greet; is valid!

// Because of Hoisting and functional scope, var is tricky in JS
// So, they introduced 'let' IN ES6
function greetPerson(name) {
    if(name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }
    var greet;
    console.log(greet);
}

greetPerson("Chandler");