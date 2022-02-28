
let date = new Date();

document.getElementById("demo").innerHTML = date;

// Create a function
// function clock(){
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     var middays;

//     hours = updateTime(hours);
//     minutes = updateTime(minutes);
//     seconds = updateTime(seconds);

//     // IF ELSE STATEMENTS
//     middays = (hours >= 12) ? "PM" : "AM";

//     document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + middays;

//     var time = setTimeout(function(){
//         clock();
//     }, 1000);

//     // Good morning, afternoon, evening condition
//     if(hours < 12){
//         var greeting = "Good Morning";
//     }
//     if(hours >= 12 && hours <= 18) {
//         var greeting = "Good Aternoon";
//     }
//     if(hours >= 12 && hours <= 24) {
//         var greeting = "Good Everning";
//     }

//     document.getElementById("greeting").innerHTML = greeting;

// }

// function updateTime(){
//     if(k < 10){
//         return "0" + k
//     } else {
//         return k;
//     }

// }

// // Call the function
// clock();