// ============================================================
// 🧬 Prototypal Inheritance in JavaScript
// ============================================================

/*
    In JavaScript, almost everything is an object — or inherits from one. This is because of
    JavaScript's prototypal inheritance system, where objects (children) inherit properties and methods
    from their prototype (parent), and that prototype may itself inherit from another prototype (grandparent).

    This creates a **prototype chain**, where JavaScript walks up the chain to find a requested property or method.

    Inheritance chain examples:
    Array    --> Array.prototype    --> Object.prototype --> null
    String   --> String.prototype   --> Object.prototype --> null
    Function --> Function.prototype --> Object.prototype --> null
    Object   --> Object.prototype   --> null

    So:
    - Arrays inherit array-specific methods (like .map(), .filter()) from Array.prototype
    - Strings inherit string-specific methods (like .toUpperCase(), .charAt()) from String.prototype
    - Functions inherit from Function.prototype
    - All of them also inherit generic methods (like .toString(), .hasOwnProperty()) from Object.prototype
    - Object.prototype is the top-most prototype in the chain, and its prototype is null

    In short: thanks to prototypal inheritance, children inherit from parents, parents from grandparents, and this continues
    up the chain until it reaches null — the end of the prototype chain.
*/

// ============================================================
// 🔹 Basic Prototypal Inheritance with Constructor Function
// ============================================================

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi, I'm ${this.name}`);
};

const alice = new Person('Alice');
alice.sayHello(); // Output: Hi, I'm Alice

console.log(Person.prototype); // { sayHello: [Function (anonymous)] }

/*
Note: The object alice inherits methods from Person.prototype.
The constructor function Person itself inherits from Function.prototype, and like all objects in JavaScript, it eventually inherits from Object.prototype.
At the top of this chain is null, which signifies the end of the prototype chain.

🔗 Prototype Chain Explanation(Visualized):
    For an instance like alice, the chain looks like this:
    alice → Person.prototype → Object.prototype → null

    For the Person constructor(which is itself a function), the chain is:
    Person → Function.prototype → Object.prototype → null
*/



// ============================================================
// 🔹 Function is Also an Object
// ============================================================

function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.username = "shubham"; // Functions can have properties like objects

console.log(multiplyBy5(3));              // Output: 15
console.log(multiplyBy5.username);        // Output: "shubham"
console.log(multiplyBy5.prototype);       // Output: {}

multiplyBy5.prototype.rank = 5;
console.log(multiplyBy5.prototype);       // Output: { rank: 5 }


// ============================================================
// 🔹 Custom Object Creation Using Constructor + Prototype
// ============================================================

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// View the prototype object (currently empty)
console.log(createUser.prototype); // Output: {}

// Add methods to prototype
createUser.prototype.increment = function () {
    // score++;  ❌
    this.score++; // ✅
};

/*
    ❌ Why `score++` inside a method doesn't work:
    The function `increment()` does NOT have a local variable or parameter named `score`.
    When you write `score++`, JavaScript looks for a variable named `score` in the local function scope or its outer lexical scopes.
    However, `score` was only defined as a parameter inside the constructor function (`createUser`) and isn't accessible here.
    That parameter disappears after construction, and what persists is the instance property `this.score`.

    ✅ The correct way is: use `this.score++`
    Because `this.score` refers to the property stored on the individual instance, which remains accessible across methods.
    - `this` refers to the instance on which the method was called (e.g., `UserA`).
*/

// Assigning a property to the function (not prototype)
createUser.name = "ded"; // This does not affect instances

const UserA = new createUser("Shubham", 99);
UserA.increment();
console.log(UserA); // Output: { username: 'Shubham', score: 100 }
console.log(UserA.name); // Output: undefined (because `name` was set on constructor, not instance)


const UserB = createUser("Himanshu", 98);
console.log(UserB); // Output: undefined (because we didn't use the 'new' keyword when calling the createUser constructor function)
/*
Without new:
    The function createUser executes like a regular function, not a constructor.
    this inside the function refers to the global object (window in browsers, or global in Node.js), not a new object.
    No object is returned explicitly, so the default return is undefined.
*/


// ============================================================
// 🧠 Summary Notes
// ============================================================

/*
    - Instances (like UserA) inherit from their constructor's prototype.
    - The `this` keyword refers to the specific instance that invoked the method.
    - Properties defined on a function (e.g. createUser.name) are not accessible by instances.
    - Prototypes allow us to add shared methods/properties without duplicating code across instances.
*/