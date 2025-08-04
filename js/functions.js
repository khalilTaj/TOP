// functions format
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
};

console.log(favoriteAnimal('Goat'));

function Sum(number1, number2){
    return number1 + number2;
};

console.log(Sum(5, 8));

// return values

function square(num){
    const squared = num * num;
    return(`The square value of ${num} = ${squared}`); //* the return value will be the showen/returned value from the function 
};

console.log(square(5));

// argumnet defualt value

function text (name, message) {
    console.log(name, ":", message);
};

console.log(text("John")); //* this shows "John : undefined" which is the defult value

function txt (name, message = "Message not found") {
    console.log(name, ":", message);
};

console.log(txt("John")); //* this shows "John : Message not founf" which is the new defult value which can be another function or var

// function expression

let sayHi = function() {
  console.log( "Hello" ); //* to call thsi funtion we use the var name which is "sayHi"
};

sayHi()

// arrow function

function Sum(number1, number2){
    return number1 + number2;
}; //* being the normal syntex for a function

let sum = (number1, number2) => number1 + number2; //* this is the arrow syntex function
//* both of shem do the same thing but arrow functions saves sapce and easier to read

//! this also can be used for argumentless functions

let greating = function (){alert("hi")}; //* for regural funtion syntex
let greatings = () => (alert("hi")); //* arrow syntex

// alert(greating());
// alert(greatings());

//* to write a long funtion with the arrow syntex you will need to use curly barckets and a refturn function

/* let add2 = (n) => {
    return(n + 2);
}; */

//! alteretive 

let add2 = (n) => {
    let result = n + 2;
    return(result)
}; //* better to keep it a oneliner if the function is that simple 

// function assignmets 

let add7 = (n) => n+7;
console.log(add7(1));

let multiply = (n1, n2) => n1 * n2;
console.log(multiply(2,2));

function capitalize(Word){
    let lower = Word.toLowerCase();
    let cap = lower.charAt(0).toUpperCase() + lower.slice(1);
    return(cap);
    //* .chartAt() picks the number of the letter to only run a fucntion on
    //* .slice() tells where to write the rest of the texts from | here it will start from the second letter
};

function lastLetter (word){
    let last_letter = word.slice(-1);
    return(last_letter);
    //* .slice() tells where to write the rest of the texts from | here it will start from the last letter
};
