Great follow-up — this touches a **very important distinction** between `prototype` and `__proto__` in JavaScript.

---

### 💥 TL;DR:

```js
console.log(alice.prototype === Person.prototype); // ❌ false (TypeError if not handled)
console.log(alice.__proto__ === Person.prototype); // ✅ true
```

---

### 🔍 Why?

Let’s go step by step.

#### 1. `alice.prototype`

* `alice` is **an instance** of `Person`.
* Only **constructor functions** (like `Person`, `Array`, `Function`, etc.) have a `.prototype` property.
* **Instances do not** have a `.prototype` property.

So:

```js
console.log(alice.prototype); 
// undefined — or TypeError if you try to access a property on it
```

Thus:

```js
console.log(alice.prototype === Person.prototype); // ❌ false (actually undefined === ...)
```

#### 2. `alice.__proto__`

* Every object instance has a `__proto__` property.
* `alice.__proto__` points to the prototype from which it inherited — which is `Person.prototype`.

So:

```js
console.log(alice.__proto__ === Person.prototype); // ✅ true
```

---

### 🧠 Summary Table:

| Expression                             | Description                                    | Result |
| -------------------------------------- | ---------------------------------------------- | ------ |
| `alice.prototype`                      | `undefined` — instances don't have this        | ❌      |
| `alice.__proto__`                      | Points to `Person.prototype`                   | ✅ true |
| `Person.prototype`                     | The prototype shared by all `Person` instances | ✅      |
| `Person.prototype === alice.__proto__` | This is the actual inheritance link            | ✅ true |

---

Let me know if you’d like a diagram or a live code sandbox-style example to help visualize this!
