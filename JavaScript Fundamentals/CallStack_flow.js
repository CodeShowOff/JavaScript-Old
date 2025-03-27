// JavaScript Call Stack for Nested Functions

function outerFunction(a) {
    console.log("Entering outerFunction");
    
    function innerFunction(b) {
        console.log("Entering innerFunction");
        return a + b;
    }

    let result = innerFunction(5);
    console.log("Exiting outerFunction");
    return result;
}

let finalResult = outerFunction(10);
console.log("Final Result:", finalResult);

/*
Step-by-Step Execution & Call Stack Changes:

1. Global Execution Context (GEC) is created:
   - `this` is set to `window` (in browsers).
   - `outerFunction` is stored in memory.
   - `finalResult` is declared but set to `undefined`.

   Call Stack:
   [ Global Execution Context ]

2. Calling `outerFunction(10)`:
   - A new execution context for `outerFunction` is created and pushed onto the stack.

   Call Stack:
   [ Global Execution Context ]
   [ outerFunction Execution Context ]

3. Inside `outerFunction` → Calling `innerFunction(5)`:
   - A new execution context for `innerFunction` is created and pushed onto the stack.

   Call Stack:
   [ Global Execution Context ]
   [ outerFunction Execution Context ]
   [ innerFunction Execution Context ]

4. Executing `innerFunction`:
   - `innerFunction` executes and returns `10 + 5 = 15`.
   - The execution context of `innerFunction` is removed from the stack.

   Call Stack after returning from `innerFunction`:
   [ Global Execution Context ]
   [ outerFunction Execution Context ]

5. Returning from `outerFunction`:
   - `outerFunction` execution completes, returns `15`.
   - Its execution context is removed from the stack.

   Call Stack after returning from `outerFunction`:
   [ Global Execution Context ]

6. Global Execution Completes:
   - `console.log("Final Result:", 15)` executes.
   - The Global Execution Context is removed.

   Final Call Stack:
   (Empty) - Execution completed.

Key Takeaways:
- Each function call creates a new execution context and is pushed onto the call stack.
- When a function finishes executing, its execution context is popped off the stack.
- The process continues until the call stack is empty, meaning JavaScript has finished execution.
*/

