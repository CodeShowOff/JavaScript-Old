// -----------------------------
// Lexical Scope in JavaScript
// -----------------------------

// --- Example 1: Global scope variable
let myName = "himanshu";

function printName() {
    console.log("my name is:", myName); // Output: my name is: himanshu
}
printName();


// --- Example 2: Function-level scope
function exampleFunc() {
    let mySecondName = "himanshu";
}
// console.log("my second name:", mySecondName);
// ❌ Error: mySecondName is not defined
// Explanation: Variables declared with let/const inside a function are not accessible outside it.


// --- Example 3: Lexical Scope demonstration
function outer() {
    let username = "shubham";

    function inner() {
        console.log(`username: ${username}`);
        // Output: username: shubham
        // ✅ The inner function has access to variables in its outer (lexical) environment.
    }

    inner();
}
outer();

/*
📘 Quick Notes:
    Lexical Scope means that a function's scope is determined by its physical location in the source code.
    Inner functions can access variables from outer functions, but not the other way around.
    Variables declared inside a function are not accessible outside it (due to function scope with let/const).
*/


// -------------------------------------------
// Scoping Behavior: var vs let / const
// -------------------------------------------

// --- Example with var:
if (Math.random() > 0.5) {
    var x = 1;
} else {
    var x = 2;
}
console.log(x);
/*
👆 For people from other languages (e.g., C, Java) where blocks create scopes,
this should throw an error because we are outside the scope of x.
But in JavaScript, blocks don't create scope for `var`.
So, `var` gets hoisted and is globally/function scoped — this can cause bugs!
*/


// --- Example with const (or let):
if (Math.random() > 0.5) {
    const x = 1;
} else {
    const x = 2;
}
console.log(x); // ❌ ReferenceError: x is not defined
/*
✅ In ES6, blocks are treated as scopes, but only with let/const (not var).
This is safer and prevents accidental leakage of variables outside blocks.
Also, ES6 introduced modules and closures that respect these scoped declarations.
*/