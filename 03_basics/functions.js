function sayMyName(){
    console.log("P");
    console.log("O");
    console.log("O");
    console.log("J");
    console.log("A");

}
//sayMyName()


// function addTwoNumbers(number1, number2)
// {
//     console.log(number1 + number2);

// }
function addTwoNumbers(number1, number2)
{
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 4)

//console.log("Result:", result);

function loginUserMessage(username= "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("pooja"))
//console.log(loginUserMessage("pooja"))


function calculateCartPrice(val1, val2,  ...num1){
    return num1
}
//console.log(calculateCartPrice(300, 400, 500, 2000))

const user ={
    username: "Pooja",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)

handleObject(
    {
        username:"sam",
        price: 399
    }
)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));