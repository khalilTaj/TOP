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

// Numbers as objects

let Num = 123;
let number = new Number(123);
console.log(typeof Num);
console.log(typeof number);

let Q = 500;
let W = new Number(500);
let check = Q == W; // == checks if q and w are equal (here it will show true)
console.log("2 number ojbects W and Q are equal? ", W == Q); //shows false 
console.log("2 number ojbects W and Q are NOT equal? ", W === Q); //shows false

let E = 500;
let R = new Number(500);
let is = E === R; // === checls if e amd r are NOT equal (here it will show false)

let what = R == W; // those 2 are bojects and are not equal

console.log(10 + 7, 9 * 8, 60 % 3);

const num1 = 10;
const num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;

console.log(9*num1, num1 ** 3, num2/num1);

let f = num1 + num2 / 8+2; // this line follows the traditonal math rule so * > / > + > -
// console.log(f);

let jeff = 5;

jeff /= 4;

let Tjeff = typeof(jeff);

// alert("i finally learned how to do that")

let me = "khalil"

console.log("it is me, ${me}") // regural string
console.log(`it is me, ${me}`) // can use vars

// multi-line strings
console.log("Hello world,\ntoday is a very nice day!");
console.log(`Hello world
today is a very nice day!`);
const day = `Hello world,
today is a very nice day!`;
console.log(day)

// force string recognation
const string = "\"hello world\" is a famouse sentence between programmers."
console.log(string)

// string to num and num to string
const myNum = 123;
const myString = String(myNum);
console.log(typeof(myString));

const isString = "123";
const toNum = Number(isString);
console.log(typeof(toNum));

// comaparing str-str & num-num & strict equality
// alert( 'Z' > 'A' ); //* A is the smallest Z is the biggest

let math = 5 < 8;
// alert(math);

let stuff = a < f;
// alert(stuff);

let F = 0;
let T = 1;

// alert(F === "") //* strict equality
// alert(F == " ") //* regual equality