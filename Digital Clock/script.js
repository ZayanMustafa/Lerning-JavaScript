// Make object hear , you can edit anything in object 
// by using var name (in below example object) with propertie name
// like :

// var object = {
//   name : "Hasan" ,
//   age : 17  ,
//   profesion : "Student" ,
// }
// console.log(object)

// edit name propertie
// object.name = "Zayyan" 
// console.log(object)

// edit age propertie
// object.age = 17.6 
// console.log(object)

// edit profession propertie
// object.profession = 'Web devolper'
// console.log(object)

// Date is used for  "Date and Time as Country" 
// var few = new(Date)
// console.log(few)

// toLocaleDateString() converts a date into simple date (Month,Date,Year)
// var dateString = few.toLocaleDateString();
// console.log(dateString);

// Day Names : 
// var dayNames = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' ,'Friday' , 'Saturday' , 'Sunday']
// console.log(dayNames.toString(" "))

// For getting  today's day :
// console.log( 'Day name :', dayNames[few.getDay()])

// Get Hours Mints Second from var = "few"
// console.log(few.getDate())
// console.log(few.getMonth())
// console.log(few.getFullYear())

// For Timing : 
// console.log(few.getHours())
// console.log(few.getMinutes())
// console.log(few.getSeconds())
// console.log(few.getMilliseconds())

// For Day's :
// console.log(few.getDay())
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var colon = document.getElementById("colon")
var colon1 = document.getElementById("colon1")
// for adding
setInterval(function(){
    if  (hours <= 10){
    hours = 0 + hours;
    }
    if  (minutes <= 10) {
        minutes =   0  + minutes;
    }
    if (seconds >= 9 ){
        seconds = 0 + seconds
    }
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    hours.innerText = currentDate.getHours();
    minutes.innerText = currentDate.getMinutes();
    seconds.innerText = currentDate.getSeconds();
//    colon.innerText= ":" 
//    colon1.innerText= ":" 

}, 1000);
