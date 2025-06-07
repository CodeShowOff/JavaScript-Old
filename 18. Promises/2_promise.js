// A Promise is an object representing the eventual result of an async operation.
// The Promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.

// operations like file accessing is not that fast as the program directly cannot access file, you need kernal access, aslo in cryptography, password encryption and others takes time
// so in these types of operations we do asynchronous programming.
// and for asynchronous programming we have two option:
// 1. async wait
// 2. promises (we use this more in modern programming)

// promises get completed in future.


// look at this like :
// "I Promise a Result!"
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code


// A Promise contains both the producing code and calls to the consuming code:

// A Promise is in one of these states: 
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// there are teo types of things:
// 1. creating a permise,
// 2. consuming a promise

// promise also reduces callback hell and pyramid of doom.


// 🧠 Why Promises Exist(Beyond If - Else)
// The main reason Promises are powerful is because they:
// Handle asynchronous code(like fetching data or waiting for a timer).
// Avoid "callback hell" — no need to keep nesting functions.
// Are chainable — you can keep writing.then().then().catch() etc.
// Represent future values — a promise is a placeholder for a value not available yet.



// creation of promise:
const promiseOne = new Promise(function (resolve, reject) {
    // Do any async task
    setTimeout(function () {
        console.log("Async task is completed");
        resolve(); // ✅ Only resolve when the async task is truly done
    }, 1000);
});

// promise consume:
promiseOne.then(function () { // <- resolve is directly connected to .then() method
    console.log("Promise consumed");
});



// another way to write:
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);

}).then(function () {
    console.log("Async task 2 resolved");
})


// passing data in resolve:
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "shubham", email: "shu@mail.com" });
    }, 1000);
})

promiseThree.then(function (userData) {
    console.log(userData);
})


//
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;

        if (!error) {
            resolve({ username: "shubham", email: "shu@mail.com" });
        } else {
            reject("Error: Something went wrong")
        }

    }, 2000)
})

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
    .finally(() => console.log("The promise is either resolved or rejected"))




// using async await:
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;

        if (!error) {
            resolve({ langName: "JavaScript", password: "123" });
        } else {
            reject("Error: JS went wrong")
        }

    }, 2000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// ----------------------------------------------------------------------------

// 
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/codeshowoff')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Errot:", error);
//     }
// }

// getAllUsers()


// another way:
fetch('https://api.github.com/users/codeshowoff')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))




// know how this .catch works like with myPromise.join().catch() and simply myPromise.catch() 