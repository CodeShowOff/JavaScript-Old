// ================
// 👤 User Object
// ================

const user = {
    username: "shubham",
    loginCount: 7,
    signedIn: false,

    // ✅ Method definition - Shorthand (ES6)
    getUserDetails() {
        // ❌ console.log(`username: ${username}`); // Will throw ReferenceError
        /*
        Why the above line fails:
            JavaScript doesn't automatically bring object properties into function scope.
            You must use `this` to refer to the current object.
                        or
            Just because a method is defined inside the object doesn't mean its code "magically sees" the other properties as variables.
            JavaScript doesn't hoist object properties into local scope.
        */

        console.log(`username: ${this.username}`); // or user.username <- ✅ Correct: Accesses object property
    },

    // ✅ Method definition - Traditional
    printCurrentContext: function () {
        console.log("this =", this);   // ✅ Refers to the `user` object itself
        console.log("user =", user);   // ✅ Explicit reference to the object

        /*
        Both log:
        {
            username: 'shubham',
            loginCount: 7,
            signedIn: false,
            getUserDetails: [Function: getUserDetails],
            printCurrentContext: [Function: printCurrentContext]
        }
        */
    }
};

console.log(user.username);     // Output: shubham
user.getUserDetails();          // Output: username: shubham
user.printCurrentContext();     // Logs entire user object



// =================================================
// ⚠️ Problem with Creating Additional User Objects
// =================================================

const user2 = {
    username: "himanshu",
    loginCount: 5,
    signedIn: true,
    getUserDetails() {
        console.log(`username: ${this.username}`);
    },
    printCurrentContext: function () {
        console.log(this);
    }
};

// ❌ This approach is repetitive and error-prone if you need to create many users.
// You'd have to manually copy the entire object structure for each new user.

// 💡 Solution:
// Use a constructor function (or ES6 class) to create reusable templates
// that can generate multiple unique user instances with shared structure and behavior.



// ==========================
// 🌐 Global Context of this
// ==========================

console.log(this);
// In browser:      → window object
// In Node.js:      → {} (empty object)

// this behaves differently depending on the environment and context of use.