let variable = "abc"
// console.log(typeof variable); // string
// console.log(typeof(variable)); // string
/*
variable = "abc" : string
        123 : number
        null : object
        undefined : undefined
*/

// -------------------------------------------------------------------------------------------

// Number conversion:
let score = "33"
let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 33
/*
score = "33" => 33 
        "33abc" => NaN 
        true => 1; false => 0 
        null => 0 
        undefined => NaN
*/

// -------------------------------------------------------------------------------------------

// Boolean conversion:
let isLoggedIn = "xyz"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true
/*
isLoggedIn = 1 => true; 0 => false
             "" => false
             "xyz" => true
*/

// -------------------------------------------------------------------------------------------

// String conversion:
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); // 33 (as string)
// console.log(typeof stringNumber); // string
