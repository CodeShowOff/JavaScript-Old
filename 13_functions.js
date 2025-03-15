// Function declaration:
function funName(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}
// Function call:
// funName();
// funName();
// console.log(funName);// [Function: funName]


function addTwoNumbers(number1, number2){
    return number1 + number2;
}
const result = addTwoNumbers(2, 3);
console.log(result);


function loginMessage(username = "Shubham"){ // <- default value passed
    return `${username} just logged in`
}
console.log(loginMessage("Hitesh"));


function calculateCartPrice(...number){ // Rest operator
    return number; // returns array
}
console.log(calculateCartPrice(232, 344, 343));
console.log(calculateCartPrice(232, 344, 343, 233, 544));


function calculateCartPrice(val1, val2, ...numbers){ // Rest operator
    return numbers; 
}   
//                            val1 val2  ...numbers...
console.log(calculateCartPrice(232, 344, 343, 233, 544));



// Passing object to function:
const user = {
    name: "Shubham",
    price: 999
}

function handleObject(anyObject){
    return `username is ${anyObject.name} and price is ${anyObject.price}`;
}

console.log(handleObject(user));

console.log(handleObject({
    name: "Mayank",
    price: 899
}));


// Passing array to function:
const newArray = [1, 2, 3, 4, 5, 6, 7];

function returnLastIndexValue(anyArray){
    return anyArray[anyArray.length - 1];
}

console.log(returnLastIndexValue(newArray));
console.log(returnLastIndexValue([23, 32, 42, 43]));
