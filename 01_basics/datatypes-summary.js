// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345689124455n

const heros = ["shaktiman", "naagraj","doga"]

let myObj ={
        name:"hitesh",
        age:22,
}

const myFunction = function()
{
    console.log("Hello world");
}

console.log(typeof heros);
console.log(typeof myFunction);


// Reference (Non primitive)

// Array, Objects, Functions


// Stack memory: (premitive), copy
// Heap memory: (Non-premitive), Reference

let myYoutubename = "hiteshchoudharydotcom"
let anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@byl"

}

let userTwo = userOne

userTwo.email = "hitesh@goole.com"
console.log(userOne.email);
console.log(userTwo.email);
