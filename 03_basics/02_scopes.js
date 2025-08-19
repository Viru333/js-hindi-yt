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