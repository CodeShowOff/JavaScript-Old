/*
ChatGPT said:
Good question! In JavaScript, when you write:
constructor(userName, books) {
    this.userName = userName;
}
You're not required to declare 'userName' inside the class explicitly like in Java. 
In JavaScript, 'this.userName' dynamically creates a property on the instance when the constructor runs.


Unlike Java, where you'd declare variables in the class like:
class UserLibrary {
    private String userName;
}
JavaScript objects are more flexible and don’t require explicit declarations before assigning properties inside the constructor.
*/