Great question — and this gets to the **heart of how JavaScript's prototype system works.**

Let’s clarify:

---

## 🔥 Why `multiplyBy5.rank = 5` is **not inherited** by `new multiplyBy5()`

```js
function multiplyBy5(x) {
  this.value = x * 5;
}

multiplyBy5.rank = 5;

const obj = new multiplyBy5(2);

console.log(obj.rank); // ❌ undefined
```

---

### ❓ Why?

When you use `new multiplyBy5()`, JavaScript does **not** link the instance (`obj`) to the function `multiplyBy5` directly.

It links the instance to **`multiplyBy5.prototype`**, like this:

```js
obj.__proto__ === multiplyBy5.prototype; // ✅ true
```

It **does NOT do** this:

```js
obj.__proto__ === multiplyBy5; // ❌ false
```

So any property attached to `multiplyBy5` (like `rank`) is **not in the prototype chain** of the created object. That’s why the instance can’t access it.

---

### 🧠 Breakdown:

* `multiplyBy5.rank = 5;` → attaches `rank` to the function object `multiplyBy5`
* `new multiplyBy5()` → creates a new object whose `__proto__` is `multiplyBy5.prototype`
* So the new object has no access to properties on `multiplyBy5` itself

---

### ✅ The Correct Way to Share With Instances

To make something available to **instances**, attach it to the function’s `.prototype`:

```js
multiplyBy5.prototype.rank = 5;

const obj = new multiplyBy5(2);
console.log(obj.rank); // ✅ 5
```

---

## 📝 In Short

```js
// Static property
multiplyBy5.rank = 5;              // accessible as multiplyBy5.rank
// Instance (inherited) property
multiplyBy5.prototype.rank = 5;    // accessible via (new multiplyBy5()).rank
```

If you're familiar with class-based languages:

* `multiplyBy5.rank` is like a **static property**.
* `multiplyBy5.prototype.rank` is like a **shared instance property**.

---

Would you like a visual diagram showing the object structure and prototype chain?
