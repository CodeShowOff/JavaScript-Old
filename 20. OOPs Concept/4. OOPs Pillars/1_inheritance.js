// ==============================
// 🔹 Base Object: User
// ==============================
const User = {
    name: "username",
    email: "email@email.com"
};

// ==============================
// 🔹 Inheriting from User: Teacher
// ==============================
const Teacher = {
    makeVideo: true
};

Teacher.__proto__ = User; // ⚠️ Legacy syntax — now Teacher inherits from User

// ==============================
// 🔹 Support Role: TeachingSupport
// ==============================
const TeachingSupport = {
    isAvailable: true
};

// ==============================
// 🔹 TA Role: Inheriting from TeachingSupport
// ==============================
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,

    __proto__: TeachingSupport // ⚠️ Legacy syntax — now TASupport inherits from TeachingSupport
};

// ==============================
// ✅ Modern Inheritance Syntax
// ==============================
// Now TeachingSupport inherits from Teacher (forming a deeper chain)
Object.setPrototypeOf(TeachingSupport, Teacher);


// ==============================
// 🧪 Testing Prototype Chain
// ==============================
console.log(TASupport.makeAssignment); // Output: "JS Assignment"
console.log(TASupport.isAvailable);    // Output: true (from TeachingSupport)
console.log(TASupport.makeVideo);      // Output: true (from Teacher)
console.log(TASupport.name);           // Output: "username" (from User)


/*
    TASupport
        ↓
    TeachingSupport
        ↓
    Teacher
        ↓
    User
*/