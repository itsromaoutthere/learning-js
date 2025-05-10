//variables:const,let,var


const accountId=144553 //contant value is always fixed
let accountEmail="hello@google.com" //the value can be changes and can be updated
//var is least used as it used to create problems in scope
var accountPassword="12345"//both var and let is way to declare variables
accountCity="Jaipur"
let accountState;

//updated values
accountEmail="hchl@yahoo.com"
accountPassword="14i6577"
accountCity="Delhi"

//{}curly brackets are known as scope

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


//print the values in table format
console.table({accountId,accountEmail,accountPassword,accountCity});



