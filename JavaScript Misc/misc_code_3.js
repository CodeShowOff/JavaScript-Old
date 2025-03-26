// To understand the code:
const Counter = (function() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            console.log("Count:", count);
        },
        decrement: function() {
            count--;
            console.log("Count:", count);
        }
    };
})();

Counter.increment(); // Count: 1
Counter.increment(); // Count: 2
Counter.decrement(); // Count: 1
