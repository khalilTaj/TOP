//! logic operators are || (or) && (and) ! and !!(not)

//* the or operator ||
let count = 10;
if (count == 10 || count >= 10){
    console.log("minimmum count achived");
}

let num = 5;
if (num < 5 || num == 5){
    console.log("num is smaller or equal to 5");
}

//* multi || will returen the first true value or the last (if all the first ones weren't true) from left to right. 
let model_hatchBack = "";
let model_sloon = "camry";
let model_suv = "land cruser";

console.log("this nice car is a", model_hatchBack || model_sloon || model_suv || "we don't have a car, womp womp.");

//* && operats if both conditions were true
let time = "12pm";
let day = "friday";

if (time == "12pm" && day == "friday"){
    console.log("it is friday noon");
}
else {
    console.log("it is not friday noon")
}

//* multi && will return the first true value from left to right, or the last value if all were true
console.log(model_hatchBack && model_sloon && model_suv); // will return nothing since the first value is empty therefore false

let light = true;
let dayLight = false;
let nightTime = true;

console.log(light && dayLight && nightTime);

//* the ! (NOT) operator returns the invers value of a boolean
console.log(!true)

//* the !! truns any value to boolean and invers it twict to return it's own value
let text = "hello world";
console.log(!!text);
console.log(!!true);

//* the function Boolean() will show if the value you is true or false

console.log(Boolean("hellow world")) //this will show true since string is true
console.log(Boolean("")) //this will show flase since it is empty quotes)
console.log(Boolean(123)) // true since any number not 0 is true
