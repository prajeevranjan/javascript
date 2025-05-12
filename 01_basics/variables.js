const accountId = 144553
let accountEmail = "rajeev@gmail.com"
var accountPassword = "Raj12345"
accountCity = "bokaro"

// accountId = 23  // accountId is a const so this will be uneffective.
accountPassword = "29110"
accountEmail = "anc@gmail.com"
accountCity = "nkaak"
let accountState


/*
prefer not to use var because of issue in block scop 
and functional scope.
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
