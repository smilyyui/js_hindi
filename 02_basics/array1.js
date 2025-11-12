const myarr=[0,1,2,3,4,5]
console.log(myarr)
//shallow copy array -copy-opeartion =>shallow copy
//a shallow copy of an object is a copy whose properties share the same references 
//deep copy
//a deep copy of an object is a copy whose properties do not share the same reference point
const myheroes=["shaktiman","naagraj"]
//new declartion of array
//A prototype is like a hidden blueprint or template from which objects can borrow properties and methods.
const myarr2=new Array(1,2,3,4)
//array method
myarr.push(6)
console.log(myarr)
myarr.pop()
console.log(myarr)
//unshift pushes  the value starting at the array due to which we shift all the element 
myarr.unshift(9)
console.log(myarr)
myarr.shift(9)
console.log(myarr)
//methods in array
console.log(myarr.includes(9))//return type boolean
console.log(myarr.indexOf(3))//return 1,-1 if not consist return the index of array if consist
const newArr=myarr.join()//join typeof string hota h 
console.log(myarr)
console.log(newArr)
console.log(typeof newArr)
//slice splice
console.log("A",myarr)
const myn1=myarr.slice(1,3)//range include nhi hota
console.log(myn1)
console.log("A",myarr)
const myn2=myarr.splice(1,3)//range include hoti h splice manipulate krta h original array ko
console.log("A",myarr)
console.log(myn2)