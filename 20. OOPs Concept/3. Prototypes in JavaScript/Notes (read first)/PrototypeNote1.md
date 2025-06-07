## 🔍 What Is a Prototype in JavaScript?

In simple terms:

> **A prototype is an object from which other objects inherit properties and methods.**

When you create an object using a **constructor function**, that object automatically gets linked to the **constructor’s prototype object**.

---

## 🧠 Think of it Like This:

Imagine a **blueprint** (the prototype), and every object created using that blueprint gets access to the tools (methods/properties) defined in it.

### 🔨 Constructor Function + Prototype:

```js
function User(name) {
  this.name = name;
}

// Add a method to the prototype
User.prototype.sayHello = function() {
  console.log("Hi, I am " + this.name);
};

const user1 = new User("Shubham");

// user1 doesn't have sayHello itself
user1.sayHello(); // 👈 Works! Because it's found on the prototype
```

### What Happens Under the Hood?

1. `new User("Shubham")` creates an object.
2. That object internally links to `User.prototype`.
3. When you call `user1.sayHello()`, JS doesn’t find it directly on `user1`, so it looks "up the chain" — on `User.prototype`.

---

## 🧬 Prototype Chain

This is the **inheritance mechanism** in JavaScript.

```js
user1 --> User.prototype --> Object.prototype --> null
```

So when you access a property or method:

* JS first checks `user1`.
* If not found, checks `User.prototype`.
* If not found, checks `Object.prototype`.
* If not found, returns `undefined`.

---

## 🤯 Common Misconception

Many people think:

> "The prototype is like a class in other languages."

Not quite. JavaScript’s inheritance is based on objects — not classes. The **prototype** is just another object — a special object attached to your constructor, from which instances can inherit.

---

## 🧪 Proof:

```js
function Test() {}
console.log(typeof Test.prototype); // 'object'
console.log(Test.prototype.constructor === Test); // true

const t = new Test();
console.log(Object.getPrototypeOf(t) === Test.prototype); // true
```

---

## 💡 TL;DR Summary

* Every function in JS (except arrow functions) gets a `prototype` object automatically.
* When you use `new`, the created object gets linked to that `prototype`.
* That link allows the object to inherit methods/properties from the prototype.
* This is called **prototypal inheritance**.

---

Let me know if you want this explained with a visual diagram or animation. It helps a ton!
