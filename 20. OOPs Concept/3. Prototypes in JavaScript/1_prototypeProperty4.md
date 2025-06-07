Great question! Declaring the `increment` function **inside** the constructor function (`createUser`) versus attaching it to the prototype affects **how methods are created and shared** between instances.

---

## 1. Declaring `increment` **inside** `createUser` (in the constructor)

```js
function createUser(username, score) {
  this.username = username;
  this.score = score;

  this.increment = function() {
    this.score++;
  };
}

const user1 = new createUser("Alice", 10);
const user2 = new createUser("Bob", 5);

user1.increment();
console.log(user1.score); // 11
console.log(user2.score); // 5
```

### What happens here?

* Each time you create a new user, **a new copy of the `increment` function** is created and assigned to that instance.
* So `user1.increment` and `user2.increment` are **different functions** in memory.

---

## 2. Declaring `increment` on the **prototype**

```js
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function() {
  this.score++;
};

const user1 = new createUser("Alice", 10);
const user2 = new createUser("Bob", 5);

user1.increment();
console.log(user1.score); // 11
console.log(user2.score); // 5
```

### What happens here?

* The `increment` function is **created once** and shared among all instances via the prototype.
* `user1.increment === user2.increment` is **true** because they reference the **same function**.

---

## ⚖️ Summary — Which is better?

| Approach                  | Memory Usage                        | When to Use                                                                      |
| ------------------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| Method inside constructor | Separate copy per instance          | If method needs access to private variables (via closure) or unique per instance |
| Method on prototype       | Shared by all instances (efficient) | Most cases; shared behavior and methods                                          |

---

## 🧠 Quick fact:

Using prototype methods is the idiomatic and memory-efficient way to add behavior to constructor functions in JavaScript.

---

Want me to generate a code example showing how closures with methods inside constructor can be useful?
