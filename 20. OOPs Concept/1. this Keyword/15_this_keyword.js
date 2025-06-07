// // 'this' keyword: current context
// const user = {
//     username: "Shubham",
//     age: 22,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// console.log(this);// {}   <- here, current context is empty because we're inside node environment and 'this' is refering to empty object.
//                   //         but in browser it will show 'window' because in browser the global object is 'window'



// Note: 'this' works differently inside a function
function func(){
    console.log(this);    
}
func();// we get many different values

const func2 = function(){
    console.log(this);    
}
func2();// we again get many different values


// but it doesnt work same with arrow function.....
