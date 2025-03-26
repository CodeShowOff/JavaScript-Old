// To understand the code:
function Counter() {
    let count = 0;
    this.increment = function() {
        count++;
        console.log(count);
    };
}
let myCounter = new Counter();
myCounter.increment();
console.log(myCounter.count); // Undefined, but myCounter exists globally