// ---------------------------------------
// Closures in JavaScript - Deep Dive
// ---------------------------------------

// --- Example 1:
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); // Output: Mozilla

/*
The displayName() inner function is returned from the outer function before being executed.

At first glance, it might seem unintuitive that this code still works. 
In some programming languages, the local variables within a function exist 
for just the duration of that function's execution. 

Once makeFunc() finishes executing, you might expect that the name variable 
would no longer be accessible. However, because the code still works as expected, 
this is obviously not the case in JavaScript.

✅ The reason is that functions in JavaScript form **closures**.

A **closure** is the combination of a function and the lexical environment within 
which that function was declared. This environment consists of any variables that were 
in-scope at the time the closure was created.

In this case:
- `myFunc` is a reference to the instance of the function `displayName` 
  that is created when `makeFunc()` is run.
- The instance of `displayName` maintains a reference to its lexical environment, 
  within which the variable `name` exists.

🧠 So, when `myFunc` is invoked, the variable `name` remains available for use, 
and "Mozilla" is passed to console.log.

💡 If you return a function, not only the function is returned, but its entire 
lexical scope (variables it closes over) is preserved.
*/



// --- Example 2: Closure for Custom Adders
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // Output: 7
console.log(add10(2)); // Output: 12

/*
In this example:
- We define a function `makeAdder(x)` that takes a single argument `x`, 
  and returns a new function.
- The returned function takes argument `y` and returns `x + y`.

🛠️ `makeAdder` is acting like a function factory. It creates functions 
that can add a specific value to their argument.

📌 `add5` and `add10` both form closures:
- They share the same function body definition.
- But they store **different lexical environments**.
- In `add5`'s closure, `x` is 5.
- In `add10`'s closure, `x` is 10.

Hence, they behave independently while remembering their respective values for `x`.
*/