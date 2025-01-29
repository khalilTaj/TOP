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