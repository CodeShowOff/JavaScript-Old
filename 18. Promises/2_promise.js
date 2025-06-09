// =========================
// 🧠 What is a Promise?
// =========================
/*
A Promise is an object representing the eventual result of an async operation.
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Operations like file accessing is not that fast as the program directly cannot access file, you need kernel access.
Also in cryptography, password encryption and others — these take time.
So in these types of operations we do asynchronous programming.
And for asynchronous programming we have two options:
    1. async/await
    2. promises (we use this more in modern programming)

Promises get completed in future.


Look at this like :
    "I Promise a Result!"
    "Producing code" is code that can take some time
    "Consuming code" is code that must wait for the result
    A Promise is an Object that links Producing code and Consuming code


A Promise contains both the producing code and calls to the consuming code:

A Promise is in one of these states: 
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.


There are two types of things:
    1. creating a promise
    2. consuming a promise

Promises also reduce callback hell and pyramid of doom.


🧠 Why Promises Exist (Beyond If - Else)
    The main reason Promises are powerful is because they:
    ✅ Handle asynchronous code (like fetching data or waiting for a timer).
    ✅ Avoid "callback hell" — no need to keep nesting functions.
    ✅ Are chainable — you can keep writing .then().then().catch() etc.
    ✅ Represent future values — a promise is a placeholder for a value not available yet.
*/

// ---------------------------------------
// ✅ Creation of Promise:
const promiseOne = new Promise(function (resolve, reject) {
    // Do any async task
    setTimeout(function () {
        console.log("Async task is completed");
        resolve(); // ✅ Only resolve when the async task is truly done
    }, 1000);
});

// ✅ Consuming the promise:
promiseOne.then(function () {
    console.log("Promise consumed");
});


// ---------------------------------------
// ✅ Another way to write:
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async task 2 resolved");
});


// ---------------------------------------
// ✅ Passing data in resolve:
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "shubham", email: "shu@mail.com" });
    }, 1000);
});

promiseThree.then(function (userData) {
    console.log(userData);
});
// See explanation in file: "explanation-1.md"


// ---------------------------------------
// ✅ Handling error with .catch():
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;

        if (!error) {
            resolve({ username: "shubham", email: "shu@mail.com" });
        } else {
            reject("Error: Something went wrong");
        }
    }, 2000);
});

promiseFour
    .then((userData) => {
        return userData.username;
    })
    .then((userName) => {
        console.log(userName);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));


// ---------------------------------------
// ✅ Using async/await:
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;

        if (!error) {
            resolve({ langName: "JavaScript", password: "123" });
        } else {
            reject("Error: JS went wrong");
        }
    }, 2000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// ----------------------------------------------------------------------------

// ✅ Async function fetching data from GitHub API
async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/codeshowoff');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
// getAllUsers();


// ✅ Using fetch with then-catch:
fetch('https://api.github.com/users/codeshowoff')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));