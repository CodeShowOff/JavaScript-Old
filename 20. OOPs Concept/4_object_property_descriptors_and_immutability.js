// ---------------------------------------------
// Why Can't We Override the Value of Math.PI?
// ---------------------------------------------

console.log(Math.PI); // 3.141592653589793
Math.PI = 5;
console.log(Math.PI); // 3.141592653589793 (didn't change)

// Get the property descriptor of Math.PI to understand why it's immutable
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
/*
Output:
{
  value: 3.141592653589793,
  writable: false,       // can't modify
  enumerable: false,     // won't show in loops
  configurable: false    // can't delete or reconfigure
}
*/


// ---------------------------------------------------------
// Creating Our Own Protected Property (like library code)
// ---------------------------------------------------------

const myObject = {
    name: 'shubham',
    price: 250,
    isAvailable: true
}

// Changing the name - allowed initially
myObject.name = 'himanshu'
console.log(myObject); // { name: 'himanshu', price: 250, isAvailable: true }

// Changing it back
myObject.name = 'shubham'
console.log(myObject); // { name: 'shubham', price: 250, isAvailable: true }

// Check the original descriptor
console.log(Object.getOwnPropertyDescriptor(myObject, 'name'));
/*
Output:
{
    value: 'shubham',
    writable: true,
    enumerable: true,
    configurable: true
}
*/

// Now, let's make the name property immutable
Object.defineProperty(myObject, 'name', {
    writable: false
});

// Check descriptor after locking
console.log(Object.getOwnPropertyDescriptor(myObject, 'name'));
/*
Output:
{
    value: 'shubham',
    writable: false,  // <-- now it's locked
    enumerable: false,
    configurable: true
}
*/

// Try changing it again
myObject.name = 'Himanshu';
console.log(myObject); // { name: 'shubham', price: 250, isAvailable: true } <- didn't change

// ---------------------------------------------
// Summary:
// - Math.PI is read-only due to its descriptor
// - You can lock your own object properties too
// - Use Object.defineProperty to protect values
// ---------------------------------------------