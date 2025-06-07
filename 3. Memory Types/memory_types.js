// Stack (Primitive), Heap (Non-Primitive)

// Primitive: stored in stack
let myName = "Shubham"
let anotherName = myName;

console.log(myName); // Shubham
console.log(anotherName); // Shubham

anotherName = "Yash"
console.log(myName); // Shubham
console.log(anotherName); // Yash
// Therefore, a copy of myName was passed into anotherName



// Non-Primitive:
let user1 = {
    name : "Shubham",
    age : 69
}
let user2 = user1

console.log(user1); // { name: 'Shubham', age: 69 }
console.log(user2); // { name: 'Shubham', age: 69 }

user2.name = "Yash"

console.log(user1); // { name: 'Yash', age: 69 }
console.log(user2); // { name: 'Yash', age: 69 }
// Therefore, reference of user1  was passed into user2