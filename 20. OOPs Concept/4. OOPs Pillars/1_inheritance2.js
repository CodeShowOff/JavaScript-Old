class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} logged in`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log("new course added");        
    }
}

const teacherA = new Teacher("shubham", "email@email.com", 12345);
teacherA.logMe();
teacherA.addCourse();

const userA = new User("himanshu")
userA.logMe();


console.log(teacherA instanceof Teacher); // true
console.log(teacherA instanceof User); // true