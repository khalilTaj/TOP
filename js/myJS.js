console.log("hello world");

let name = "jeff";
let lastName = "herman";

console.log(name, lastName);
console.log(lastName);
console.log(name);

// re-assigning 

let age = 11;
console.log(age);

age = 54;

console.log(age);

const pi = 3.14159;
console.log(pi);

// pi = 50;
// console.log(pi);

console.log("this is the start of the assigment");
console.log(23+97);
console.log(258974+458621);
let a = 10;
console.log(a);
console.log(9*a);
let b = 7*a;
console.log(b);

let max = 57;
let actual = max - 13;
let percent = actual/max;
let $ = 1;
let _ = 1;
// let 1A = 5; --> shows an error, can't start with a digit
// let return = 4; --> shows an error 'return' cant be a var
// let let = 5; --> shows an error can't have 'let' as a var
num = 5; //works jsut fine

// the % aka modulus operator use is dividing the numbers to int and gives the remaing example

let x = 10 % 5; // should show 0 cuz 10/5 = 2 which is a full int
let z = 10 % 3; // should show 1 cuz 10 have 3 sets of 3s and then a 1 would be left
let y = 10 % 4; // should show 2 cuz 10 have 2 sets of 4 leaving 2

// Increment ++ and Decrement -- Operators 

let A = 5;
let B = 5;

// this will add 1, subtract 1 then print
console.log("operator before the var = ",++A, --B);
console.log("value of the var now = ",A, B);

// this will print then add 1, subtract 1
let C = 5;
let D = 5;

console.log("operator afer the var = ",C++, D--);
console.log("value of the var now = ",C, D);