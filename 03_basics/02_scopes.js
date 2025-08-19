var c = 300
let a = 300
if(true){
    // console.log(c);
    let a =10 // within this scope
    const b = 20 // within this scope
    var c =3000 // even outside this scope. not used
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"

        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++

console.log(addone(5)); // this will not give error

function addone(num){
    return num+1
}


// addTwo(5) // this will give error

const addTwo = function(num){
    return num+2
}
