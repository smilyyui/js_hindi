let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
//object hota h typeof
let mycreate=new Date("2023-01-14")
console.log(mycreate.toDateString())
console.log(mycreate.toLocaleDateString())
//date is using for to find the time in milli sec since 1 jan 1970
let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(mycreate.getTime())
// seconds
console.log(Math.floor(Date.now()/1000))
let newdate=new Date()
console.log(newdate.toLocaleString())
console.log(newdate.getDay())
newdate.toLocaleString('default',{
    weekday:"long"
})