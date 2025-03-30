// for loop:
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// while loop:
let i = 1;
while(i <= 10){
    // console.log(i);
    i++;
}

// do-while loop:
let score = 1;
do{
    // console.log(score);
    score++;
}while(score <= 10);


// for-of loop:
let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings){
    // console.log(greet);
}


// for-in loop:
    // iterating in objects:
const myObj = {
    js: 'javascript',
    java: 'java',
    cpp: 'c++',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(key);
}
// Output: all keys
// js
// java
// cpp
// swift

for (const key in myObj) {
    // console.log(myObj[key]);
}
// Output: all values
// javascript
// java
// c++
// swift by apple


    // iterating in array:
const programming = ['js', 'java', 'cpp', 'ruby'];
for(const key in programming){
    // console.log(key);// 0 1 2 3 (index <- keys)
}
for (const key in programming) {
    // console.log(programming[key]);// js java cpp ruby (values)
}



// for-each loop:
const coding = ['js', 'java', 'cpp', 'ruby'];

coding.forEach( function (val) {
    // console.log(val);
} )

coding.forEach( (val) => {
    // console.log(val);
} )

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);

// Output for all 3 above:
// js
// java
// cpp
// ruby


// but if we want to return values then:
const myArr = [1, 2, 3, 4, 5, 6, 7];
let result = myArr.forEach((num) => {
    return num >= 4;
})
console.log(result);// undefined because for-each doesnt return anything.

const myNums = [1,2,3,4,5,6,7,8,9];
const newNums = [];
myNums.forEach((num) => {
    if (num >= 5) {
        newNums.push(num);
    }
})
console.log(newNums);// [ 5, 6, 7, 8, 9 ]


coding.forEach( (val, index, array) => {
    console.log(val, index, array);
} )
// Output:
// js 0 ['js', 'java', 'cpp', 'ruby']
// java 1 ['js', 'java', 'cpp', 'ruby']
// cpp 2 ['js', 'java', 'cpp', 'ruby']
// ruby 3 ['js', 'java', 'cpp', 'ruby']


// iterating over array of objects:
const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "java",
        fileName: "java"
    },
    {
        languageName: "python",
        fileName: "py"
    }
]

myCoding.forEach( (obj) => {
    console.log(obj.fileName, obj.languageName);
} )
// Output:
// js javascript
// java java
// py python