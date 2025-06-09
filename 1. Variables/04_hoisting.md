**Hoisting in JavaScript** is a behavior in which **variable and function declarations** are moved to the **top of their containing scope** (script or function) during the **compilation phase**, before code execution.

### Key Concepts

---

#### ✅ **Variable Hoisting**

Only the **declaration** is hoisted, not the **initialization**.

```js
console.log(x); // undefined
var x = 5;
```

Internally, JavaScript does this:

```js
var x;
console.log(x); // undefined
x = 5;
```

#### ❌ `let` and `const` are hoisted too, but...

They are **hoisted to the top of their block scope**, but **not initialized**. Accessing them before declaration results in a **ReferenceError** due to the **Temporal Dead Zone (TDZ)**.

```js
console.log(y); // ReferenceError
let y = 10;
```

#### ✅ **Function Declarations Are Fully Hoisted**

```js
sayHi(); // "Hi!"

function sayHi() {
  console.log("Hi!");
}
```

Function **declarations** are hoisted entirely — both the **name** and the **body**.

#### ❌ Function Expressions Are NOT Hoisted

```js
sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Hello");
};
```

Here, `sayHello` is hoisted as a variable (`var sayHello`), but not assigned a function until runtime.

---

### Summary Table

| Type                 | Hoisted? | Initialized?  | TDZ?                 |
| -------------------- | -------- | ------------- | -------------------- |
| `var`                | ✅ Yes    | ❌ No          | ❌ No                 |
| `let` / `const`      | ✅ Yes    | ❌ No          | ✅ Yes (TDZ)          |
| Function Declaration | ✅ Yes    | ✅ Yes         | ❌ No                 |
| Function Expression  | ✅ (var)  | ❌ (func body) | ✅ (TDZ if let/const) |

---

Would you like a visual example or a code sandbox to play with this concept?
