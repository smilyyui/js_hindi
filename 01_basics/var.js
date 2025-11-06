const account_Id=144453
let accountEmail="hitesh@google.com"
var accountpassword="12345"
accountCity="jaipur"
let state;
//account_Id=2 const can not be changed prefer not to use var because of isssue in block scope in functional scope
//var is not declared it refer as undefined
console.log(account_Id);
accountEmail="abhi@papa.com"
accountpassword="5678"
accountCity="Mathura"
console.table([accountEmail,accountpassword,accountCity,account_Id,state])
