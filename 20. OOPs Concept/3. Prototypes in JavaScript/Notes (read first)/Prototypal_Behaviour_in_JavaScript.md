### 🔁 Prototypal Behavior in JavaScript — Explained Simply

JavaScript uses **prototypal inheritance**, not classical inheritance like Java or C++. This means that **objects inherit directly from other objects**, through something called the **prototype chain**.

Let’s break it down.

---

## 🚀 What Is Prototypal Behavior?

**Prototypal behavior** is how JavaScript lets objects:

* **Inherit properties and methods** from other objects.
* Use a **chain (called the prototype chain)** to resolve missing properties or methods.

Every object in JavaScript has a **`[[Prototype]]`** (accessible via `__proto__`), which points to another object — and this continues up the chain until `null`.

---

## 📦 Example:

```js
const parent = {
  greet() {
    console.log("Hello from parent");
  }
};

const child = Object.create(parent);

child.sayHi = function() {
  console.log("Hi from child");
};

child.sayHi(); // "Hi from child"
child.greet(); // "Hello from parent" (inherited from parent)
```

### What’s happening:

* `child` has its own method: `sayHi`.
* When we call `child.greet()`, it’s **not found on `child`**, so JS looks at its `__proto__` (which points to `parent`).
* Found there ✅

---

## 🔗 The Prototype Chain

If something isn’t found on an object, JavaScript automatically walks **up the prototype chain**.

```js
console.log(child.__proto__ === parent); // true
console.log(child.__proto__.__proto__ === Object.prototype); // true
```

Eventually, the chain ends at `null`:

```js
console.log(Object.prototype.__proto__); // null
```

---

## 🧠 Prototypal vs Classical Inheritance

| Classical (e.g. Java)   | Prototypal (JavaScript)               |
| ----------------------- | ------------------------------------- |
| Classes and subclasses  | Objects inherit directly from objects |
| Inheritance via classes | Inheritance via `[[Prototype]]`       |
| Static structure        | Flexible, dynamic structure           |

---

## 🔧 Ways to Use Prototypal Inheritance in JS

### 1. `Object.create()`

```js
const human = {
  speak() { console.log("I'm human"); }
};

const bob = Object.create(human);
bob.name = "Bob";
```

### 2. Constructor Functions + `.prototype`

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.makeSound = function() {
  console.log(this.name + " makes a sound");
};

const dog = new Animal("Dog");
```

### 3. ES6 `class` Syntax (Syntactic Sugar)

```js
class Person {
  speak() {
    console.log("Speaking...");
  }
}
const p = new Person();
```

Behind the scenes, it still uses the prototype chain.

---

## 📝 Summary

* **Prototypal behavior** = inheritance via the `[[Prototype]]` chain.
* All objects have a `__proto__` (or `[[Prototype]]`) pointing to their parent object.
* Property/method lookup walks this chain until found or `null`.
* You can create this structure using `Object.create`, constructors, or `class`.

Would you like a diagram or interactive example for the prototype chain?
