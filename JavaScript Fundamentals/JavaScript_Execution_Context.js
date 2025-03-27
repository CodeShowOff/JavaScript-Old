/*
JavaScript Execution Context Explained with Visualization

When JavaScript runs a script, it first creates a Global Execution Context (GEC).
This is the environment where the entire JavaScript code is executed.
JavaScript is single-threaded, meaning it executes one operation at a time.

**Types of Execution Contexts in JavaScript:**
1. **Global Execution Context (GEC)** - Default execution context for the entire script.
2. **Functional Execution Context (FEC)** - Created whenever a function is called.
3. **Eval Execution Context** - Created when the eval() function is used.


**Global Execution Context (GEC) in Detail:**
- The GEC is the first execution context created when the script runs.
- It consists of two components:
  1. **Memory Component (Variable Environment):**
     - Stores function and variable declarations.
     - Variables are initialized with `undefined`, while functions store their definitions.
  2. **Thread of Execution:**
     - Executes the code line by line.
- The `this` keyword in the GEC refers to the global object:
  - In browsers, `this === window`.
  - In Node.js, `this === global`.


**Why Execution Context Matters:**
- Helps JavaScript manage memory and execution flow.
- Understanding execution contexts prevents errors like accessing undefined variables.
- The call stack mechanism avoids infinite recursion and stack overflow.

**How JavaScript Code Executes:**
JavaScript execution happens in two phases:
1. **Memory Creation Phase (Creation Phase):**
   - Memory is allocated for variables and functions.
   - Variables are initialized with `undefined`, while functions get their full definition.
2. **Execution Phase:**
   - Variables are assigned values.
   - Function calls create a new execution context.
   - The function execution context is pushed onto the Call Stack and removed when execution is complete.
*/


// **Example Code Execution:**

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 3);

/*
**Step-by-step Execution:**

1. **Global Execution Context (GEC) is created.**
   - `this` refers to the global object (window in browsers, global in Node.js).

Call Stack: [ Global Execution Context ]

2. **Memory Creation Phase (Hoisting occurs here):**
    Memory Allocation:
   - `val1` -> `undefined`
   - `val2` -> `undefined`
   - `addNum` -> Function definition is stored in memory.
   - `result1` -> `undefined`
   - `result2` -> `undefined`

3. **Execution Phase Begins:**
   - `val1 = 10`
   - `val2 = 5`
   - `addNum` remains a function reference.
   - `result1 = addNum(val1, val2)`
     - A new Functional Execution Context (FEC) is created for `addNum`.

        Call Stack:
        [ Global Execution Context ]
        [ addNum Execution Context ] <- Pushed when addNum is called

        - Memory Creation Phase inside `addNum`:
            - `num1` -> `undefined`
            - `num2` -> `undefined`
            - `total` -> `undefined

        - Execution Phase inside `addNum`:
            - `num1 = 10`
            - `num2 = 5`
            - `total = 10 + 5 = 15`
            - Function returns `15`.
        - FEC is removed from the Call Stack.

        Call Stack:
        [ Global Execution Context ] <- After function execution

        - `result1 = 15`
        - `result2 = addNum(10, 3)` follows the same process:
            - `num1 = 10`, `num2 = 3`
            - `total = 10 + 3 = 13`
            - Function returns `13`.
            - `result2 = 13`

**Execution Completed.**


**Call Stack Flow:**
Initially, the Call Stack contains GEC.
When `addNum` is called, a new function execution context is pushed onto the stack.
After execution, it is popped off, and control returns to GEC.
Once all operations complete, GEC is removed, and execution ends.

**Final Call Stack:**
Empty (Execution completed)

**Why Call Stack Matters:**
- It ensures a structured execution flow.
- Helps in debugging stack overflows and infinite loops.
- Understanding the stack trace helps in debugging errors efficiently.

Understanding execution contexts and the Call Stack helps prevent issues like stack overflow and improves debugging efficiency.
*/