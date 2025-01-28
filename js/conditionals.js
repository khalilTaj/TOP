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

