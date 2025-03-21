// var a = 30;
// let b = 10;
// const c = 20;

// ------------------------------------------------------------------------

// problem exists with 'var': it's scope doesn't work as required

// if(true){
//     var a = 30;
//     let b = 10;
//     const c = 20;
// }
// now, so as the variale is declared inside block of 'if' condition
// then it should not get accessed outside its block, but the var doesnt follow this rule:

// console.log(b);// error
// console.log(c);// error
// console.log(a);// no error, accessible outside the block and this can cause inconsistency and bugs in code

// ----------------------------------------------------------------------------

// let a = 100;
// if(true){
//     a = 50;
// }
// console.log(a);// 50


// let b = 100;
// if(true){
//     let b = 50;
//     // now the value of 'b' inside 'if' is 50 and it wont affect global variable 'b'
//     console.log(b);// 50    
// }
// console.log(b);// 100

//-----------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------
