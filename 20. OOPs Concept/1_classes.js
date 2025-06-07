// ES6 Class - cleaner and modern way to define constructors and methods
/*
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method added to User.prototype
    encryptPassword() {
        return `abc${this.password}def`;
    }
}

const userA = new User("Shubham", "email@email.com", 12345);

console.log(userA.encryptPassword()); // abc12345def
console.log(userA); // Output: User { username: 'Shubham', email: 'email@email.com', password: 12345 }
*/


// Equivalent constructor function using prototype (pre-ES6)
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Method defined on the prototype
User.prototype.encryptPassword = function () {
    return `abc${this.password}def`;
}

const userB = new User("Himanshu", "gmail@email.com", 12345678);

console.log(userB.encryptPassword()); // abc12345678def
console.log(userB); // Output: User { username: 'Himanshu', email: 'gmail@email.com', password: 12345678 }