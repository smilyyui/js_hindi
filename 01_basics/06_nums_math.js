const num=400// automatically defined hai
console.log(num)
const balance=new Number(100)//specailly defined hai
console.log(balance)
console.log(balance.toString())
const number=123.9878
// to fixed how many value you can take after after a decimal value and it roundoff the value and it return in string
console.log(number.toFixed(2))
//computer do not store decimal number perfectly
//precision it decides how many total digit from start to end
console.log(number.toPrecision(3))
const a=10000000
console.log(a.toLocaleString('en-IN'))
// round ceil thoda bhi jyada hua toh roundoff kardega
// floor opposite h ceil ka
console.log(Math.ceil(4.2))
//random value 0 to 1
console.log((Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)