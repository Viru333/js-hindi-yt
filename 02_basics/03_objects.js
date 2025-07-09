// singleton

// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    "full name": "Aman Kumar Yadav",
    [mySym]: "mykey1", // Using symbol as key
    age: 22,
    location: "Delhi",
    email: "aky@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // important syntax for accessing key value
// console.log(JsUser[mySym]); // Using symbol as key


JsUser.email = "amanKumar@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aky@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());