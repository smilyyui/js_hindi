const tinderuser=new Object()//singleton object
console.log(tinderuser)
const obj={}
obj.id="123abc"
obj.name="abhi"
obj.islogin=false
//console.log(obj)//literal object
const reg={
    email:"abhi123@gamil.com",
    fullname:{
        userfullname:{
            firstname:"abhi",
            lastname:"kumar"
        }
    }

}
//console.log(reg.fullname.userfullname.firstname)//acess of nested object
//object combine
const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d"
}
//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
console.log(obj4)
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
 console.log(obj);

 console.log(Object.keys(obj));
 console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(obj.hasOwnProperty('islogin'));
