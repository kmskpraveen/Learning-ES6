// 'let' declarations are not Hoisted and are block scoped
function greetPerson2(name) {
    var greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "Hi there";
    }
    // let greet; // 'let' declarations are Hoisted. So, this won't work!
    console.log(greet);
}
greetPerson2("Chandler");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); //10
    console.log(b_1); //20
}
console.log(a); //10
console.log(b); //2
// Note: Unlike 'var', 'let' declaration cannot re-declare in SAME scope
var c = 1;
var c = 2; // Completely fine
var d = 1;
// let d=2; // Won't work.
//# sourceMappingURL=tutorial6.js.map