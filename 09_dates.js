let myDate = new Date();

// console.log(myDate);// 2025-02-10T21:44:57.197Z  <- as Object
// console.log(myDate.toISOString());// 2025-02-10T21:45:53.564Z  <- as String
// console.log(myDate.toString());// Tue Feb 11 2025 03:15:53 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());// Tue Feb 11 2025
// console.log(myDate.toLocaleString());// 11/2/2025, 3:15:53 am  


// Customised date:
let myCreatedDate = new Date(2025, 0, 29);
// console.log(myCreatedDate.toLocaleDateString());// 29/1/2025  <- so, month is 0-index based
// console.log(myCreatedDate.toDateString());// Wed Jan 29 2025

// Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
myCreatedDate = new Date(2025, 0, 29, 11, 47, 55, 29);
// console.log(myCreatedDate.toLocaleString());// 29/1/2025, 11:47:55 am


myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());// 14/1/2023, 5:30:00 am

myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());// 14/1/2023, 12:00:00 am


let myTimeStamp = Date.now()
// console.log(myTimeStamp);// 1739224898857  <- in miliseconds
// console.log(myCreatedDate.getTime());// 1673634600000
// console.log(Math.floor(Date.now()/1000));// 1739224898  <- in seconds



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);// 2  <- as month is 0-indexed
console.log(newDate.getDay());// 2  <- tuesday
console.log(newDate.getFullYear());// 2025
console.log(newDate.getDate());// 11


// Customizing date format:
newDate.toLocaleString('default', 
    {
        weekday: "long",
    }
)
