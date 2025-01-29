//! if satment formate 
//* if (condition) {result;} | exmaple

let test = 1;

if (test == 1) {
    console.log("everything is running smoothly");
}

//! else Statement formate
//* if (condition) {result;} + else {result} | example 

if (test == 0) {
    console.log("Not Running");
}
else {
    console.log("everything is running smoothly");
}

//! else if Statement formate
//* if (condition) {result;} + else if {second condition} + else {result} | example

test = 0

if (test == 0) {
    console.log("Not Running");
}
else if (test == 1) {
    console.log("everything is running smoothly");
}
else {
    alert("BIG ERROR BOO");
}

//! nesting if Statments
//* if statmnet inside if statment

let weather = 35;
let time = "day";

if (weather == 35) {
    if (time == "day") {
        console.log("have icecream")
    }
    else {
        console.log("have soda")
    }
}
else if (weather < 35) {
    console.log("it is too cold for a cold snack, try hot coco")
}
else {
    console.log("just turn on the AC at this point")
}

//! switch
//* switch works somewhat boolean based case to case bases
/*
switch(expression) {
  case x: the x refers to the vlaue of the expression
    code block
    break;
  case y:
    code block
    break;
  default:
    code block
}
*/


let day = 1;

switch (day){ // the expression is the value between the brackets which can be anything
    case 0: // the value after case is the value of the expression
        console.log("day is friday");
        break;
    case 1:
        console.log("day is not friday");
        break;
    default:
        console.log("idk why it is not working")
}

//* multi case to the same output

switch (day) {
    case 0:
    case 1:
        console.log("day is friday");
        break;
    default:
        console.log("day is idk");
        break;
}

//! Ternary Operator
//* Ternary is a short for an if statment
/*
condition ? true : false;
if the condtions is true
*/

let gender = "male";
const sex = gender = "male" ? "sir" : "ma'am";
/*
you don't have to make it into a varuable, could be like this:
let gender = "male";
gender = "male" ? console.log("sir") : console.log("ma'am");
*/
console.log(sex); // document.write(sex); is used to write in the html page not the console

//* Ternary for an if else statment (nested)
/* 
condition 1 ? true : condition 2 ? true : condition 3 ? true : false;
this can go forvever
*/

let age = 21;

age == 20 ? console.log("age is 20") : age > 20 && age < 40 ? console.log("between 20 and 40 years old") : age >40 && age < 60 ? console.log("between 40 and 60 years old") : console.log("elder person");
