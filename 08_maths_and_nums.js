// Numbers:
// const score = 400;
// const balance = new Number(100);

// console.log(score); // 400
// console.log(balance); // [Number: 100] (its specifically number now)

// console.log(balance.toString()); // '100'
// console.log(balance.toFixed(2)); // 100.00

// let anotherNumber = 26.872;
// console.log(anotherNumber.toPrecision(3)); // 26.9
// console.log(anotherNumber.toPrecision(2)); // 27

// anotherNumber = 1342.287
// console.log(anotherNumber.toPrecision(3)); // 1.34e+3

// anotherNumber = 10000000;
// console.log(anotherNumber.toLocaleString()); // 1,00,00,000
// console.log(anotherNumber.toLocaleString('en-IN')); // 1,00,00,000
// console.log(anotherNumber.toLocaleString('en-US')); // 10,000,000


// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.EPSILON); // 2.220446049250313e-16


// Maths:
console.log(Math.abs(-367));// 367
console.log(Math.round(3.3));// 3
console.log(Math.round(3.5));// 4
console.log(Math.round(3.7));// 4
console.log(Math.floor(3.4));// 3
console.log(Math.ceil(3.4));// 4
console.log(Math.min(2, 3, 5, 4));// 2
console.log(Math.max(2, 3, 5, 4));// 5
console.log(Math.random());// between 0 to 1
console.log((Math.random() * 10) + 1);// between 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);// between 1 to 10

// to get in a specific range:
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // <- formula