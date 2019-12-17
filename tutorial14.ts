// Spread Operator is kind of opposite to Rest operator
// It takes an array and split it into elements
let displayColors3 = function(mesg, ...colors) {
    console.log(mesg);
    for(let i in colors) {
        console.log(colors[i]);
    }
}

let mesg = "List of Colors";
let colorArray = ['Orange','Yellow','Indigo'];
displayColors3(mesg, ...colorArray); // Spread operator is used here

// Rest Operator is specified in function declaration
// Spread Operator is specified during function call