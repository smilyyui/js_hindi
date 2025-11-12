//object literal=>simplest to craete an object in js
const mysym=Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mysym]:"mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.mysym)//datatype string m de rha h symbol ki tarah use ho rha h
console.log(JsUser[mysym])
JsUser.email="abhi@123.com"
//Object.freeze(JsUser)//no changes
//console.log(JsUser)
// function ko variable ki tarah use kiya
JsUser.greeting= function(){
    console.log("hello js user");
}
console.log(JsUser.greeting())
//console.log(JsUser.greeting)//undefined
JsUser.greeting2= function(){
    console.log(`hello js user,${this.name}`);
}
console.log(JsUser.greeting2())
