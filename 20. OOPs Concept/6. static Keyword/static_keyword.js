// 🔍 What does static mean in a class?
// In JavaScript, the static keyword is used to define a method that belongs to the class itself, not to instances of the class.

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`${this.username} logged in`);
    }

    static createId() {
        return `123`;
    }
}

const user1 = new User("Shubham");

user1.logMe();         // ✅ "Shubham logged in"
user1.createId();      // ❌ Error: user1.createId is not a function

User.createId();       // ✅ Works: "123"



/*
When to Use static Methods?
Use static when:
    The method does not need access to instance (this) data.
    You want a utility function associated with the class.
    You want to provide a function like a factory, validator, or ID generator.

Example:

class MathUtils {
    static square(x) {
        return x * x;
    }
}

console.log(MathUtils.square(4)); // 16


🧠 In short:
static methods are called on the class itself, not on instances. They're useful for logic that’s class-level, not instance-level.
*/