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

// console.log(loginUserMessage("Aman"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 300, 500, 100]))