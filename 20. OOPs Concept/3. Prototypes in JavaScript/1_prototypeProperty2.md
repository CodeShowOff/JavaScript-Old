Great question — this highlights a **core difference** between assigning a property **to a function object itself** vs. **to its prototype**, which directly affects **instances** and **inheritance** in JavaScript.

---

## 🆚 Difference Between:

```js
multiplyBy5.rank = 5;
```

vs

```js
multiplyBy5.prototype.rank = 5;
```

---

### 🔹 1. `multiplyBy5.rank = 5`

This adds a property **directly to the function object** `multiplyBy5`.

```js
function multiplyBy5(x) {
  return x * 5;
}

multiplyBy5.rank = 5;

console.log(multiplyBy5.rank); // ✅ 5
```

* `rank` becomes a **static property** of the function.
* It is **not inherited** by any instances created via `new multiplyBy5()` (if that's even a constructor).
* This is just like assigning a property to any object.

---

### 🔸 2. `multiplyBy5.prototype.rank = 5`

This adds `rank` to the **prototype** object of the function, which affects instances created using `new`.

```js
function multiplyBy5(x) {
  this.value = x * 5;
}

multiplyBy5.prototype.rank = 5;

const obj = new multiplyBy5(2);
console.log(obj.rank); // ✅ 5 (inherited from prototype)
```

* Now `obj` (an instance) **inherits** `rank` via the prototype chain.
* `obj` doesn't have its own `rank`, but it can access it through its `__proto__`.

---

## 🧠 Summary Table

| Expression                       | Affects                   | Available On               | Used For                |
| -------------------------------- | ------------------------- | -------------------------- | ----------------------- |
| `multiplyBy5.rank = 5`           | Function object itself    | `multiplyBy5.rank`         | Static config/data      |
| `multiplyBy5.prototype.rank = 5` | Instances of the function | `(new multiplyBy5()).rank` | Inherited behavior/data |

---

## ✅ Rule of Thumb

* Use `functionName.property = ...` → if you want to attach static info to the **function itself**.
* Use `functionName.prototype.property = ...` → if you want to share behavior/data with all **instances** created by that function.

---

Want an example where both are used in the same context (like in a library)?
