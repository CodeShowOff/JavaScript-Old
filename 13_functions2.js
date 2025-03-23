// we can declare function inside function.
function one(){
    const username = "Shubham"

    function two(){
        const iplTeam = "RCB"
        console.log(username);        
    }

    two();    
}

one();

// -------------------------------------------------------------------------------
// Hoisting:

addOne(5);// -> allowed

function addOne(num){
    return num + 1;
}

addOne(5);// -> allowed



// addTwo(5);// -> not allowed (Error)

const addTwo = function(num){
    return num + 2;
}

addTwo(5);// -> allowed
