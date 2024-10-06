/* 
Author: AJ Spicknall
Date: October 4, 2024
Purpose: A Birthday counter page
*/

"use strict";

// This executes the code and gets called up by milliseconds
runClock();
setInterval("runClock()", 1000);


// Step 11: Create function around block for live updating
function runClock() {

// Step 2: Define a new Current Date object
var currentDate = new Date();

// Step 3: Display current date and time to the user
var dateStr = currentDate.toLocaleDateString();
var timeStr = currentDate.toLocaleTimeString();
document.getElementById("current-date").innerHTML = "The current date is: " + dateStr;
document.getElementById("current-time").innerHTML = "The current time is: " + timeStr;

// Step 4: Change Img Source Property *Used the code from the Canvas page*
var hour = currentDate.getHours();
if (hour < 12) {
    document.getElementById("greeting-image").src = "images/morning.jpg";
} else if (hour < 18) {
    document.getElementById("greeting-image").src = "images/afternoon.jpg";
} else {
    document.getElementById("greeting-image").src = "images/night.jpg";
}

// Step 5: Create a Constant of my Birthday
const BIRTHDAY = new Date("April 24, 2001");

// Step 6: Write out the date of my Birthday
document.getElementById("birthday").innerHTML = BIRTHDAY.toLocaleDateString();

// Step 7: Calculate how many days old I am
var timeDiff = currentDate - BIRTHDAY;
var daysDiff = Math.floor(timeDiff / (1000*60*60*24));
document.getElementById("days-old").innerHTML = daysDiff;

// Step 8: Calculate how old I would be in Dog years\
var myAgeInYears = (currentDate - BIRTHDAY) / (1000 * 60 * 60 * 24 * 365.25);
var dogYears = Math.round(myAgeInYears*7);
document.getElementById("age-dog-years").innerHTML = dogYears;

// Step 9: Calculate the number of seconds remaining until the first of the month
var nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth()+1,1);

// Step 10: Write out the number of seconds until the first of the next month
var secondsUntilNextMonth = Math.round((nextMonth - currentDate) / 1000);
document.getElementById("seconds-next-month").innerHTML = secondsUntilNextMonth;

}