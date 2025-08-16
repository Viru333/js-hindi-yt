function sayMyName(){
    console.log("Aman")
}

// sayMyName() // executing the func
// sayMyName // reference of the func

// function addTwonumbers(number1, number2){
//     console.log(number1 + number2)
// }


function addTwonumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwonumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage("Aman"))
console.log(loginUserMessage())