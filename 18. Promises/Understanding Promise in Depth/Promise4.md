Great question — this dives into the **practical usage** of `resolve`, `reject`, `.then()`, and `.catch()` in JavaScript Promises, along with **how they work together** and when to use each.

---

## 🔧 1. `resolve` and `reject` — What & When

These are **functions provided by the Promise constructor** to control the outcome of the promise you’re creating.

### 🔹 `resolve(value)`

* Called when the **asynchronous task completes successfully**.
* Moves the promise from `pending → fulfilled`.
* The `value` is passed to `.then()`.

### 🔹 `reject(error)`

* Called when the **asynchronous task fails or encounters an error**.
* Moves the promise from `pending → rejected`.
* The `error` is passed to `.catch()`.

---

## 🔧 2. `.then()` — Handling Resolved (Fulfilled) Promises

Used to attach **a success handler** that runs when the promise is resolved.

```js
myPromise.then((value) => {
    console.log("Success:", value);
});
```

---

## 🔧 3. `.catch()` — Handling Rejected Promises

Used to attach **an error handler** that runs when the promise is rejected.

```js
myPromise.catch((error) => {
    console.log("Error:", error);
});
```

You can chain `.catch()` after `.then()` or use it directly.

---

## ✅ Example: All Together

```js
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve("🎉 Task succeeded");
        } else {
            reject("❌ Task failed");
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log("THEN:", result);
    })
    .catch((error) => {
        console.log("CATCH:", error);
    });
```

### 🔍 Output if `success = true`:

```
THEN: 🎉 Task succeeded
```

### 🔍 Output if `success = false`:

```
CATCH: ❌ Task failed
```

---

## 🔄 `.catch()` usage styles

### 🔸 Style 1: Chain after `.then()` (good for readable flow):

```js
myPromise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error);
    });
```

### 🔸 Style 2: Use `.catch()` alone (good when you don’t care about `.then()`):

```js
myPromise.catch((error) => {
    console.error("Something went wrong:", error);
});
```

### ⚠️ Difference:

Both work similarly **if the `.catch()` is attached to the same promise**.
But in chaining, `.catch()` only catches errors from **that chain**.

---

## 🔁 Chained Error Example:

```js
new Promise((resolve, reject) => {
    throw new Error("Boom!");
})
.then(() => {
    console.log("This won't run");
})
.catch((err) => {
    console.error("Caught error:", err.message);
});
```

✅ `catch` catches even if the error happens in the executor **or** in any `.then()` above.

---

## 🧠 In Summary:

| Method               | Purpose                    | When Used                        |
| -------------------- | -------------------------- | -------------------------------- |
| `resolve(value)`     | Mark promise as successful | When async task finishes         |
| `reject(error)`      | Mark promise as failed     | When async task fails            |
| `.then(onFulfilled)` | Handle resolved value      | After `resolve()`                |
| `.catch(onRejected)` | Handle rejection/error     | After `reject()` or thrown error |

---

If you want a mental model:

* **`resolve → then()`**
* **`reject → catch()`**
* **Errors inside executor or then() are caught by catch()**

---

Would you like to go deeper into chained promises, or error propagation in `.then()` → `.catch()` → `.then()` chains?
