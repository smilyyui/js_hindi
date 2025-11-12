const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
//marvel_heroes.push(dc_heroes)//array inside array
//console.log(marvel_heroes)
const newarr=marvel_heroes.concat(dc_heroes)
console.log(newarr)
//spead operator
//The spread operator (...) in JavaScript means “open up” or “expand” an array or object.
const allheroes=[...marvel_heroes,...dc_heroes] //this is example of open up means merge two array and return new array
console.log(allheroes)
const another_array=[1,2,3,[4,5,6],[9,8,10]]
const real_another_array=another_array.flat(Infinity)//nested array ko ek array m le ahata h 
console.log(real_another_array)
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//convert a array
console.log(Array.from({name: "hitesh"})) // interesting btana padhta h key ko banye yha value ko
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
