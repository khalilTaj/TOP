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
