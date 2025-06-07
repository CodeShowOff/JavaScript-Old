Let’s use a **custom function** that returns a value.

```js
function greet() {
  console.log("Hello!");
  return "Greeting done";
}

const result = greet(); // This calls greet immediately
console.log(result);    // Output: "Greeting done"
```

Here:

* `greet()` is called immediately.
* `result` stores the return value of `greet()` → `"Greeting done"`.

Now compare this:

```js
const reference = greet; // No parentheses
```

Here:

* `reference` holds the **function itself**, not the result.
* You can later call it like: `reference();`

---

### 🔹 Visual comparison

| Expression                           | Meaning                                           | What it holds                      |
| ------------------------------------ | ------------------------------------------------- | ---------------------------------- |
| `const a = greet;`                   | Store the **reference to the function**           | `a` is now a function              |
| `const b = greet();`                 | Call the function immediately, store return value | `b` is a string: `"Greeting done"` |
| `const t = setTimeout(greet, 1000);` | Schedule `greet` to run later, store timer ID     | `t` is a number (timer ID)         |

---

### ✅ Key Rule

* Use `greet` (no `()`) when **you want to pass the function reference**.
* Use `greet()` when **you want to call it immediately and get its return value**.
