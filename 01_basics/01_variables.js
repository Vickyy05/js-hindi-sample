const accountId = 144553
let accountEmail = "vicky1005@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;


// accountId = 2 // not allowed 

accountEmail = "shigvanvivke@gmail.com"
accountPassword = "20930"
accountCity = "Vasai"

console.log(accountId);

/* 
Prefer not to use var 
beacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

