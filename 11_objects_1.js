// Object declaration:
const user = {
    name : "Shubham",
    "full name" : "Shubham Kumar",
    age : 22,
    location : "Delhi",
    isLoggedIn : false,
    email : "shubham@google.com"
}

console.log(user);
console.log(user.name); // not recommended
console.log(user["name"]); // recommended
// console.log(user[name]); // not allowed
// console.log(user."full name"); // not allowed
console.log(user["full name"]);



// Interview Question: use Symbol as a key in Object
const mySym = Symbol("key");
const tempUser = {
    // mySym : "key2" // wrong way, its not a symbol anymore its now string
    [mySym] : "key2"
}
console.log(tempUser[mySym]);// correct way
// console.log(tempUser.mySym);// undefined; as its not a correct way to access a symbol
console.log(tempUser);


// to change a value in Object:
user.age = 23;
console.log(user);


// If we want to freeze an object so that its value cant be modified:

console.log(user["email"]);// shubham@google.com
user.email = "shubham@fb.com"
console.log(user["email"]);// shubham@fb.com; so the value changes
// if we freeze:
// Object.freeze(user);
user.email = "shubham@yahoo.com";
console.log(user["email"]);// shubham@fb.com; value didnt change



// FUnctions can be treated as variales:
user.greetings = function(){
    console.log("Hello user");
}
user.greetings();// Hello user
// console.log(user.greetings);// [Function (anonymous)]


user.greetings2 = function(){
    console.log(`Hello user ${this.name}`);
}
user.greetings2();


user.greetings3 = function(){
    return `Hello user, how are you ${this.name}`;
}
console.log(user.greetings3());
