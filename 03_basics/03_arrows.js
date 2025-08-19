const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // this --> point to empty object in node environment but in console it  points to window object

// function chai(){
//     let username  = "Hitesh"
//     // console.log(this.username); // undefined
// }

// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3,4))

