//Object literal
const user = {
    username:"pooja",
    loginCount: 5,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from database");
       // console.log(`username:${this.username}`);
       console.log(this);
    }

}
console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);

// Object Function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}
const userOne = new User("pooja" , 10, true)
const userTwo = new User("CahiAUrCode", 11, false)
console.log(userOne);
console.log(userTwo);
