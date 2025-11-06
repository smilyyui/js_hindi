// data memory m kese store hota h aur usse kese store krte hain
// primitve call by value 
// 7 types string,number,boolean,null,undefined,symbol,BigInt
// let var and const are used to declare variables in js and js dynamic typed because you don not specify the types of variable
//non primitive call by reference reference directly allocate kiya jaa sakta hain
//array,objects,Functions
//We use Node.js to run JavaScript outside the browser — mainly on the server side
//The browser (like Chrome, Edge, or Firefox) provides an environment where JavaScript code can run.
//But remember —
//JavaScript doesn’t run directly on your computer hardware.
// It runs inside the browser, using a special engine.
const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2)
const hero=["abhi","rupa","ayushi"]
let myobj={
    name:"abhi",
    age:22,
}
// non pritimive ka type of object atta h
// memory 
//stack(primitive) aapne jo variable declare kara h ussko appka copy milta h heap(non primitive) yha refrence milta original value jo bhi change hoga vo original m hoga
let name="abhi"
let newname=name
newname="puspendra"
console.log(newname)
console.log(name)
let user={
    email:"vickychacha.com",
    upi:"user@ybl"
}
let user2=user
user2.email="vivek@123.com"
console.log(user2.email)
console.log(user.email)
