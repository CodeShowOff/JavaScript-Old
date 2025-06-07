let myArr = [1, 2, 3, "Shubham", 43.32, true, [5, 6]];
console.log(myArr);


myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[2]);

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2.length);

// Array methods:
myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift();// left-shift
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(3));
console.log(myArr.join());// '1,2,3,4,5' (type: String)
console.log(myArr.join('+'));// '1+2+3+4+5'


// slice and splice in JavaScript:
const arr1 = [1,2,3,4,5,6];
let arr2 = arr1.slice(1, 3);
console.log(arr1);// [ 1, 2, 3, 4, 5, 6 ] (unchanged)
console.log(arr2);// [ 2, 3 ]

arr2 = arr1.splice(1, 3);
console.log(arr1);// [ 1, 5, 6 ] (changed)
console.log(arr2);// [ 2, 3, 4 ]
