let displayColors = function() {
    console.log(message);
    for(let i in arguments) {
        console.log(arguments[i]);
    }
}

let message = "List of Colors";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');
// The above would become a problem, "List of Colors" will print twice
// But in ES6/ES2015, it is dealt differently -> Rest parameter 
// Rest parameter (...) represents an indefinite no. of arguements into an array
let displayColors2 = function(message, ...colors) { // Here colors is an array of passed arguements
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for(let i in colors) {
        console.log(colors[i]);
    }
}
displayColors2(message, 'Red');
displayColors2(message, 'Red', 'Blue');
displayColors2(message, 'Red', 'Blue', 'Green');