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
