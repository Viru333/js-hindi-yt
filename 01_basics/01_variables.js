const accountId = 144553
let accountEmail = "aman90@gmail.com"
var accountPassword = "random"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed


accountEmail = "Hc@hc.com"
accountPassword = "newPassword"
accountCity = "Hyderabad"

/*
Always use let instead of var.
var doesn't follow scope.
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
