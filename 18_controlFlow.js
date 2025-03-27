const isUserLoggedIn = true;
if(isUserLoggedIn){
    // console.log("User is logged in"); 
}


if (2 == "2"){
    // console.log("true");
}
/*
Why?
This happens because == (double equals) is the loose equality operator in JavaScript. It performs type coercion, meaning JavaScript automatically converts one value’s type to match the other before comparing.
Step-by-Step Explanation:
    The number 2 is a number type.
    The string "2" is a string type.
    Since == (loose equality) is used, JavaScript coerces the string "2" into a number (2).
    Now, it's comparing 2 == 2, which is true.
*/


if(2 === "2"){
    // console.log("true");
}else{
    // console.log("false");
}
// Because === checks both value and type, and 2(number) is not the same type as "2" (string).


// bad practice: using comma instead of braces
// if(true) console.log("hii"), console.log("hello");



// Switch case:
const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("Invalid");
        break;
}




// Truthy and Falsey values:
const userEmail = "shubham@gmail.com" // truthy

if(userEmail){
    console.log("Got the email");// this gets executed
}
else{
    console.log("please provide email");
}


const userEmail2 = "" // falsy 

if (userEmail2) {
    console.log("Got the email");
}
else {
    console.log("please provide email");// this gets executed
}

// so if string has values then its a true and if it doesn't have values then its false;

// falsy values: 
//      false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values:
//      true, "0", 'false', " ", [], {}, function(){}