const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };

function regularFunc() {
  console.log(this.name);
}
const arrowFunc = () => {
  console.log(this.name);
};

regularFunc.call(obj1); // Alice
arrowFunc.call(obj2);   // undefined (because `this` is inherited from the outer scope)
