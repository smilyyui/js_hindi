function sayname(){ // function functionname
    console.log("hello")
}
sayname()
function addTwoNumbers(number1, number2){
   console.log(number1 + number2);
 }
const result=addTwoNumbers(3,5)
console.log(result)//Undefined
function addTwoNumbers(number1, number2){
     return number1 + number2;
 }
 addTwoNumbers(3,5)
 function loginUserMessage(username="sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))
function calculateCartPrice(val1, val2, ...num1){//spread operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
}) // koi object bna kar pass karta h 

