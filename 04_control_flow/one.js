// if

// if(true){
//     console.log("Hello");
// }

// if(false)
// {
//     console.log("Hi");
// }

// if(2=== "2"){
//     console.log("Execut5ed");
// }

Temprature = 41

if(Temprature == 41){
    console.log("Temprature is equal to 41");
}else
{
    console.log("Temperature is not equal to 41");
}
// <, >, <=, >=, ==, !=, ===, !==



const score = 200

if (score > 100){
    const power = "fly"
   // console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);

 const balance = 1000

//if (balance > 500) console.log("test") , console.log("test2");

// if (balance < 500)
// {
//     console.log("Less than 500");
// }
// else if(balance<750)
// {
//     console.log("Less than 750");
// }
// else if(balance<950){
//     console.log("Less than 950");
// }else{
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard)
{
    console.log("Allow to buy course");
}

if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User Logged In");
}
