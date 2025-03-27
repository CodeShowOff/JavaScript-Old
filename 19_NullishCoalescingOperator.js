// Nullish Coalescing Operator(??) 
// The Nullish Coalescing Operator(??) is used to provide a default value when a variable is null or undefined.

let result = value1 ?? value2;

// If value1 is NOT null or undefined, result will be value1.
// If value1 is null or undefined, result will be value2.



let val;

val = 5 ?? 50; // <- 5   (assigns the first value it gets, so here 5)
val = null ?? 10 // <- 10
val = undefined ?? 15 // <- 15
val = null ?? 10 ?? 15 // <- 10

console.log(val);



// When to Use ???
// Use ?? when you only want to replace null or undefined, but still allow values like 0, false, or "" to be valid.

// Real - World Use Case
// Fetching a user’s name, but using "Guest" if it's null or undefined:

let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"





// Why Use ?? Instead of || :
// The logical OR operator(||) also provides a fallback, but it treats falsy values(like 0, '', or false) as "empty", which may not be the desired behavior.

// Example Using || (OR Operator)
let count1 = 0;
let finalCount1 = count || 10;
console.log(finalCount1); // Output: 10 ❌ (Even though `count` is valid)
// 🚨 Problem: 0 is a falsy value, so || wrongly replaces it with 10.


// Example Using ?? (Nullish Coalescing Operator)
let count2 = 0;
let finalCount2 = count ?? 10;
console.log(finalCount2); // Output: 0 ✅ (Correct behavior)
// ✅ Fix: ?? only replaces null or undefined, not other falsy values.