const func = () => {
    console.log("Shubham");
}
func();


const func2 = () => (console.log("hii"));
func2();


// Explicit return:
const addtwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addtwo(4, 6))

// Implicit return:
const addtwo2 = (num1, num2) => (num1 + num2);
console.log(addtwo(4, 6))


// returning object:
const sayMyName = () => ({username: "Shubham"})
console.log(sayMyName());



// behaviour of 'this' with arrow function: In JavaScript, arrow functions handle this differently compared to regular functions. The reason why console.log(this); inside your arrow function outputs {} (or window in a browser) is due to lexical scoping of this.
const myFunc = () => {
    console.log(this);
}
myFunc();// {}



const obj = {
  name: "Alice",
  regularFunc: function () {
    console.log(this.name); // "Alice" (this refers to obj)
  },
  arrowFunc: () => {
    console.log(this.name); // `undefined` in strict mode (this refers to the outer scope, not obj)
  }
};

obj.regularFunc(); // Alice
obj.arrowFunc();   // undefined (or window.name in browsers)
