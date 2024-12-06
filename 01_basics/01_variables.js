const accountId = 144553
let accountEmail = "pooja@gmail.com"
var accountPassword = "12345"
accountCity = "Dang"

// accountId = 2 // not allowed
accountEmail = "puja@gmail.com"
accountPassword = "225566"
accountCity = "Kathmandu"
let accountState;

//console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])


/*
Prefer not to use var because of issue in block scope and functional scope.
*/