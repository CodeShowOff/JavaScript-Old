// non singleton object:
const tinderUser = {};

// singleton object:
const tiktokUser = new Object();

tinderUser.id = "abc1234"
tinderUser.email = "some@gmail.com"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullName : {
            firstname : "Shubham",
            lastName : "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname);
// console.log(regularUser.fullname.userFullName);


// to combine two or more objects:
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// let obj3 = {obj1, obj2};
// console.log(obj3);// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// obj3 = Object.assign(obj1, obj2);
//          or
// obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// obj3 = {...obj1, ...obj2};
// console.log(obj3);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// values from database comes in the form of array of objects:
const myArray = [
    {
        name: "Shubham",
        age: 22
    },
    {
        name: "Himanshu",
        age: 20
    },
    {
        name: "Prashant",
        age: 22
    }
]
// console.log(myArray[0].name);
// console.log(myArray[1].name);

// ways to access keys and values of Object:
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true


// Destructuring Objects:
const course = {
    courseName: "Philosophy",
    price: 999,
    courseInstructor: "Shubham",
}
    // so say we we want to access the courseName many times then
    // always doing -> course.courseInstructor is kind of not a good practice;

    // instead we'll do:
    // Method-1: directly using variable name
    const {courseInstructor} = course;
    // so we can directly use courseInstructor now:
    console.log(courseInstructor);// Shubham

    // Method-2: using alias of the variable name
    const {courseInstructor: instructor} = course;
    console.log(instructor);// Shubham
