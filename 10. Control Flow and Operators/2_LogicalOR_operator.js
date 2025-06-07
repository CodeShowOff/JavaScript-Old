// Logical OR(||) Operator:
// The Logical OR(||) operator is used to evaluate two expressions and returns the first truthy value it encounters.

result = value1 || value2;

// If value1 is truthy, result is value1.
// If value1 is falsy, result is value2.


// Note:Logical OR stops evaluating as soon as it finds a truthy value.


console.log(10 || 20);  // Output: 10 ✅ (First truthy value)
console.log(0 || 20);   // Output: 20 ✅ (0 is falsy, so returns 20)
console.log(null || "Hello");  // Output: "Hello" ✅ (null is falsy)



let userName = "" || "Guest";
console.log(userName); // Output: "Guest" ✅ ("" is falsy, so returns "Guest")



// When to Use ||?
// ✅ Use || when you want to replace any falsy value with a default.
// ✅ Useful for handling empty strings, zeros, or false values.