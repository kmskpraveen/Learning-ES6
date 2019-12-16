for(var i=1; i<=5; i++){
    console.log(i)
} // prints 1 to 5 numbers

for(var i=1; i<=5; i++){
    setTimeout(function(){console.log(i)},1000)
} // prints 6 (5 times)
// This is because of 'var'..
// In order to achieve the desired reult,
// use Immediately invoked function expression or 'let'

for(let i=1; i<=5; i++){
    setTimeout(function(){console.log(i)},1000)
} // prints 1 to 5 numbers