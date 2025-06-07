You're absolutely right to be confused—JavaScript handles this *very* differently than Java, and it can feel weird at first.

### Here's the short answer:

If you define a JavaScript function with two parameters, and you call it with **only one argument**, JavaScript **doesn't complain**. The function still runs. The missing parameter will just be set to `undefined`.

---

### Here's an example:

```javascript
function greet(name, message) {
  console.log(name);     // whatever is passed in
  console.log(message);  // will be undefined if not provided
}

greet("Alice");
```

**Output:**

```
Alice
undefined
```

---

### Why is this allowed?

JavaScript is very **loose** with function arguments:

* You can pass **fewer arguments** than declared — the rest will be `undefined`.
* You can pass **more arguments** than declared — the extras are just ignored unless you explicitly capture them (e.g., with the `arguments` object or rest `...args`).

---

### Compare with Java:

In **Java**, functions (methods) are strictly typed and require **exact matching**:

* If a method takes two parameters, you **must** provide two arguments, or the code won't even compile.

---

### Quick note on best practices:

If you want to handle optional arguments in JavaScript, you can do things like:

```javascript
function greet(name, message = "Hello!") {
  console.log(name + ": " + message);
}

greet("Bob"); // Uses the default message
```

---

Let me know if you want to see how to simulate Java-like behavior (e.g., argument checks) in JavaScript!
