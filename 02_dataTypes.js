let name = "shubham"  // String
let age = 22  // Number
let isLoggedIn = true  // Boolean
let address  // undefined

/* 
Primitive: (call by value, i.e. reference of original data is not passed, copy is passed)
    Number
    BigInt
    Boolean  => true/false
    String  => "" or ''
    null  => Standalone value 
    undefined
    Symbol  => used for uniqueness

Non-primitive or reference-type: (call by value)
    Object
    Array
    Functions

*/

console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof null) //object (mistake of language)
console.log(typeof undefined) //undefined


// Primitives:
// We don't need to specify the type of variable, as js is dynamically typed language:
const value1 = 33;
const value2 = 56.98;
const value3 = false;
const value4 = null;
const value5 = undefined;

// Symbol (is used for uniqueness):
const id1 = Symbol('123');
const id2 = Symbol('123');
console.log(id1 === id2); // false : because the return value of both is not same;

// BigInt:
const bigNum = 43874837327597458745n;


// Non-Primitives (data type : object):
// Array:
const heros = ["SpiderMan", "JohnSnow", "SuperMan"]

// Objects:
let myObj = {
    name : "Shubham",
    age : 20
}

// Functions:
let myFunction = function(){
    console.log("Hello");
}