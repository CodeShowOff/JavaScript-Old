let myHerosMarvel = ["thor", "spiderman"];
let myHerosDC = ["superman", "flash"];

let heroPower = {
    thor: "hammer",
    spiderman: "swing",

    getSpiderPower: function () {
        console.log(`spiderman power: ${this.spiderman}`);
    }
};


// ==================================
// 🔧 Extending Array Prototype
// ==================================

// Let's say we want to attach a new function to all arrays that performs some custom operation.
// This is like "injecting" a new method into the Array class, so every array has access to it via its prototype.

Array.prototype.customFunc = function () {
    console.log("I am customFunc from Array");
};

// Now all arrays can use this method:
myHerosMarvel.customFunc(); // ✅ I am customFunc from Array
myHerosDC.customFunc();     // ✅ I am customFunc from Array

// But plain objects won't have access to this method:
// heroPower.customFunc(); // ❌ Error: not a function



// ==================================
// 🔧 Extending Object Prototype
// ==================================

Object.prototype.customAnotherFunc = function(){
    console.log("I am customAnotherFunc");
}

// Now accessible on all objects AND arrays too (because Array → Object)
heroPower.customAnotherFunc();     // ✅ I am customAnotherFunc
myHerosMarvel.customAnotherFunc(); // ✅ I am customAnotherFunc
myHerosDC.customAnotherFunc();     // ✅ I am customAnotherFunc

// 🔍 All arrays are objects, so they inherit from Object.prototype too.



// ==================================
// 🔧 Extending String Prototype
// ==================================

// Sample string with trailing spaces:
let myName = "Shubham     "
console.log(myName.length); // 12

// Add a method to return "true" length after trimming
String.prototype.trueLength = function () {
    console.log(this); // [String: 'Shubham     ']
    return this.trim().length;
};

// Use the new method
console.log(myName.trueLength()); // ✅ 7