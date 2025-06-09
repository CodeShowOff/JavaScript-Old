function SetUserName(username){
    // Imagine complex logic here for validating or formatting username (e.g., DB calls).
    this.username = username;
}

function createUser(username, email, password){
    SetUserName.call(this, username); 
    // Using .call() to invoke SetUserName with the current `this` context
    // so that its property assignments apply to the same object.

    this.email = email;
    this.password = password;
}

const userA = new createUser("shubham", "email@email.com", 12345);
console.log(userA);
// Output:
// createUser {
//     username: 'shubham',
//     email: 'email@email.com',
//     password: 12345
// }