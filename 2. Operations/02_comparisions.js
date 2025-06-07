1;
console.log(2 > 1); //true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

2;
// Both comparisons convert the strings to numbers:
console.log("2" > 1); // true ("2" becomes 2, and 2 > 1)
console.log("02" > 1); // true ("02" becomes 2, and 2 > 1)


3;
// Reason in text file:
console.log(null > 0); // false 
console.log(null == 0); // false 
console.log(null >= 0); // true 
// Reason:
// Relational comparisons (>, <, >=, <=) convert null to 0.
// Equality (==) does not convert null; it only equals undefined. 

4;
// Reason in text file:
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

5;
// Reason in text file:
console.log("2" === 2) // false

6;
console.log(null == undefined); // true
console.log(null === undefined); // false
