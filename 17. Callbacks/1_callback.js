// This function accepts another function as a parameter (a callback)
function hello(callback) {
    console.log("hello");
    // Calls the callback function passed as an argument
    callback();
}

// This is the callback function to be passed
function goodbye() {
    console.log("goodbye");
}

// Call the hello function, passing goodbye as a callback
hello(goodbye);

/*
Explanation:
- The 'goodbye' function is passed to 'hello' as a callback.
- Inside 'hello', the parameter 'callback' holds a reference to the 'goodbye' function.
- Calling 'callback()' inside 'hello' executes the 'goodbye' function.
- This demonstrates how JavaScript functions can be passed and executed as arguments.
- Output:
        hello
        goodbye
*/
