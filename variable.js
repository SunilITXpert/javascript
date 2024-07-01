// variable declarations using var, let, and const in JavaScript:

// Variable declarations rules -
/*
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/

// Using var: var declarations are function-scoped or globally scoped. They can be re-declared and updated.





// Example 1: Function-scoped var
function varExample() {
    var x = 10;
    if (true) {
        var x = 20; // Re-declaration of x
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
}

// Example 2: Global-scoped var
var firstName = "John";
function getFirstName() {
    console.log("Hello, " + firstName); // Output: Hello, John
}

var abc = 10
var abc = 20



// Using let:
// let declarations are block-scoped and can be updated but not re-declared within the same scope.

// Example 1: Block-scoped let
function letExample() {
    let y = 10;
    if (true) {
        let y = 20; // New variable y scoped to this block
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 10 (outer y remains unchanged)
}

// Example 2: Updating let variables
let count = 0;
count = count + 1;
console.log(count); // Output: 1


// Using const: const declarations create variables that cannot be reassigned. They are block-scoped like let. 

// Example 1: const declaration
const PI = 3.14;
console.log(PI); // Output: 3.14

// Example 2: Attempting to reassign const (will throw an error)
const myName = "Alice";
myName = "Bob"; // Error: Assignment to constant variable

// Note: const variables must be initialized with a value and cannot be updated or re-declared within the same scope.
//These examples demonstrate the usage and behavior of var, let, and const in different contexts within JavaScript, highlighting their scoping rules and mutation capabilities.