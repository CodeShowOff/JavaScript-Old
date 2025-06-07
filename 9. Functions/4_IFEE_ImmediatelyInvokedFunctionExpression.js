// Immediately Invoked Function Expression: An IIFE is a function that runs immediately after it is defined.
    // The function is wrapped inside parentheses (function() { ... }) to make it an expression.
    // The trailing () immediately invokes the function.

    // (function() { ... }) → Defines an anonymous function.
    // () → Immediately invokes the function.

// It is useful for:
// Avoiding polluting the global scope
// Creating a private scope for variables
// Executing code immediately



// Basic IIFE Example:
(function() {
    console.log("IIFE executed!");
})();

(function functionName() {
    console.log("IIFE executed!");
})();

(function(name) {
    console.log("Hello, " + name + "!");
})("Alice");


// Note: Always use semi-colon ';' after the IIFE.


// IIFE with Arrow Function:
(() => {
    console.log("Arrow Function IIFE");
})();





// Use of IIFE in detailed, like how it prevents global pollution:
// ### **Regular Function (Pollutes Global Scope)**
function greet() {
    console.log("Hello!");
}
greet();
// - `greet` exists in the **global scope**, meaning other scripts can modify it.


// ### **IIFE (No Global Pollution)**
(function() {
    console.log("Hello from IIFE!");
})();

// ✅ **No function name in the global scope** → Cannot be modified!  
// ✅ **Runs immediately**  