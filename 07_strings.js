// Concatenation:
const name = "Shubham";
const age = 50;
// Not a good way to do concatenation now:
console.log(name + age);
// Good way now is:(use back-ticks)
console.log(`My name is ${name} and my age is ${age}`);

const myName = "Rahul";
const myage = 20;
const myData = `My name is ${myName} and my age is ${myage}`;
console.log(myData);


// Declaration:
const str = new String('Shubham');
console.log(str); // [String: 'Shubham']
// In browser:
// str ->   String {'Shubham'}
//          0: "S"
//          1: "h"
//          2: "u"
//          3: "b"
//          4: "h"
//          5: "a"
//          6: "m"
//          length: 7[[Prototype]]: 
//          String[[PrimitiveValue]]: "Shubham"


// Methods in string:
console.log(str[1]); // h
console.log(str.length); // 7
console.log(str.endsWith('m')); // true

let newStr = 'fuck-off';
newStr = newStr.replace('-', '+');
console.log(newStr);

newStr = '  hii  ';
newStr = newStr.trim();
console.log(newStr);

newStr = 'a,b,c,d';
newStr = newStr.split(',');
console.log(newStr); // [ 'a', 'b', 'c', 'd' ]

newStr = 'my name is shubham kumar jaiswal';
console.log(newStr.includes('shubham')); // true