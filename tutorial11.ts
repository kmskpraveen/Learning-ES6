var employee = {
    id: 1,
    greet: function() {
        setTimeout(function(){console.log(this.id);},1000)
    }
}
employee.greet(); // undefined.. because
// When you have a function it is going to create its own context
// of 'this' keyword ..

// A small work around to the above problem
var employee1 = {
    id: 1,
    greet: function() {
        var self = this; // saving context of 'this' keyword within this function 
        setTimeout(function(){console.log(self.id);},1000)
    }
}
employee1.greet(); // 1

// Now, with arrow functions it is much easier..
var employee2 = {
    id: 1,
    greet: function() {
        setTimeout(() => {console.log(this.id);},1000)
    }
}
employee2.greet(); // 1, because, whenever you use an arrow function,
// it is not going to create its own 'this'. 
// So, 'this' in arrow function = parent's 'this'