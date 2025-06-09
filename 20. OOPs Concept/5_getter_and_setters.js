// Topic: Getters and Setters in JavaScript (Class, Function & Object-based)

// --- Using Class Syntax (ES6+) 
// You only need to know this. 
class User {
    constructor(email, password) {
        this.email = email;       // calls the setter → this._email = value
        this.password = password; // calls the setter → this._password = value
    }

    get password() {
        return this._password.toUpperCase(); // returns uppercase password
    }

    set password(value) {
        this._password = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
}

const user = new User("shubham@mail.com", "abc123");

console.log(user.email);     // Output: shubham@mail.com
console.log(user.password);  // Output: ABC123 (uppercase!)



// --- Function-based syntax (Before ES6)
function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email); // Output: CHAI@CHAI.COM



// --- Object literal based approach
const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const tea = Object.create(User);

console.log(tea.email); // Output: H@HC.COM