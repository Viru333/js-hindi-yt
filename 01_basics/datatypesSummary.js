// Primitive :  
                // String
                // Number
                // Boolean
                // Null
                // undefined
                // Symbol
                // BigInt



const id = Symbol('123') // unique entity
const anotherId = Symbol('123') // another unique entity although the description is same

// console.log(id === anotherId); // false
// console.log(typeof anotherId); // Symbol
// console.log(typeof id); // Sybol


const bigNumber = 63642424524524278643n

// Reference (Non Primitive)
                // Array
                // Objects
                // Funcions



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory(Primitive)   Heap Memory(Reference)



let ytName = "Visionx"
let anotherYtName = ytName
anotherYtName = "Visionxyz"

console.log(ytName);
console.log(anotherYtName);



let user1 = {
    email :"user1@gmail.com",
    upi : "user1@ybl"
}

let user2 = user1

user2.email = "user2@gmail.com"

console.log(user1.email);
console.log(user2.email);
