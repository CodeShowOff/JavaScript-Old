// Note: In JS variables are very strong and it can hold many things like: functions, objects, primptive and non primptive values, etc.

const accountId = 12345;
let accountEmail = "shubham@code.com";
var accountPass = "123@pass";
accountCity = "Mumbai"; // whithout variable type
let accountState;   // holds no value i.e. undefined

/*
note:
    const : to declare a constant
    let : to declare a variable
    var : to declare a variable
    direct variable name : to declare a variable 

-> prefer not to use 'var' because of issue in block scope or functional scope
*/

// To print the data:
console.log(accountId);
console.log(accountEmail)
        // or
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);


// accountId = 54321; // not allowed
accountEmail = "hello@google.com";
accountPass = "321@pass";
accountCity = "Pune";
accountState = "Maharashtra";

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);