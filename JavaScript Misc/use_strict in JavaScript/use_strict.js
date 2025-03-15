"use strict";  // ->Yes, to enable strict mode for an entire script, the "use strict"; directive 
               // must appear at the very top of the file, before any other statements. If it is 
               // not at the top, it will be ignored.

// Without strict mode
x = 10; // This would silently create a global variable
console.log(x);

// With strict mode
"use strict";
y = 20; // Error: y is not defined
console.log(y);

let y = 20; // it is okay