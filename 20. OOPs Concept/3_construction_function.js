// ==========================================
// ❌ Constructor Function Without `new`
// ==========================================

function User(username, loginCount, isLoggedIn) { // <- here 'User' is a constructor function
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // <- Needed here since we’re not using `new`
}

// Called WITHOUT `new`
const userOne = User("Shubham", 22, true);

console.log(userOne); // Prints the global object (or undefined in strict mode)
// At this point, `this` refers to the global object (or `undefined` in strict mode),
// and userOne will just hold the global object reference (not a new instance).

/*
What Happened:
   You called User(...) without 'new', so 'this' inside the function refers to the global object in Node.js (i.e., global) in non-strict mode (or undefined in strict mode).
   Inside 'User', properties are added to 'this', so you're modifying the global object directly.
   Since you're returning 'this', 'userOne' becomes a reference to the global object.
*/


console.log(userOne.username); // Shubham

const userTwo = User("Himanshu", 14, false);
console.log(userOne.username); // 'Himanshu' <- Values get overwritten
console.log(userTwo.username); // 'Himanshu'
// Because `this` refers to the same object (global/window), values are shared/overwritten.



// ========================================
// ✅ Using Constructor Function *with* `new`
// ========================================

function User2(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // `return this` is NOT needed — it's implicit when using `new`
}

// Create instances properly:
const userA = new User2("Shubham", 22, true);
const userB = new User2("Himanshu", 14, false);

console.log(userA); // User { username: 'Shubham', loginCount: 22, isLoggedIn: true }
console.log(userB); // User { username: 'Himanshu', loginCount: 14, isLoggedIn: false }
console.log(userA.username); // Shubham
console.log(userB.username); // Himanshu


/*
Create a new instance using the 'new' keyword:
    const userOne = new User("Shubham", 22, true);

Step-by-step: what happens internally when using 'new'

1. A new empty object is created internally:
   const obj = {};

2. The constructor function 'User' is called:
   User.call(obj, "Shubham", 22, true);

3. Inside the function, properties are assigned to 'this' (which refers to 'obj'):
   obj.username = "Shubham";
   obj.loginCount = 22;
   obj.isLoggedIn = true;

4. The new object is linked to the constructor's prototype:
   obj.__proto__ = User.prototype;

5. The object is returned automatically:
   return obj;

So, the final object looks like this:
    console.log(userOne); 
    Output: User { username: 'Shubham', loginCount: 22, isLoggedIn: true }

    console.log(userOne instanceof User); // true
*/