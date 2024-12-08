// singleton

// object literals

const mySym = Symbol("key1")


const JsUser ={
    name: "Pooja",
    "full name": "Pooja Chaudhary",
   [mySym] : "mykey1",
    age: 25,
    location: "Dang",
    email: "puja50@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "pooja@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "pooja@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());