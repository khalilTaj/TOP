// for loop explained on an array

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  //* here we created the const `cat` and assigend it for every value of the array `cats`
  console.log(cat);
}

// spicailty loops map() and filter()\
//* map() apply the needed changes and creat a new collection for it

function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper);
console.log(upperCats);

//* filter() is used to creat a new collection with the items that match
function lCat(cat) {
  return cat.startsWith("L");
};
const filtered = cats.filter(lCat);

console.log(filtered);

// for loop synetx
//* normally for loops will be inside a function
let counter = function(){
  for (let n = 1; n < 10 || n == 10; n++){
    //* for has 3 declarations within it for(initializer; condistion; what to do after 1 cycle aka final experssion)
    console.log(n, " times");
    };
};

console.log(counter());

// break in loops
//* the break is used to stop the loop once the desired outcome is reached
//* we will use the past counter statment for easier example 

let counter6 = function(){
  for (let n = 1; n < 10 || n == 10; n++){
    //* for has 3 declarations within it for(initializer; condistion; what to do after 1 cycle aka final experssion)
    console.log(n, " times");
    if (n == 6){
      console.log("counter reached number 6")
      break; //* break must be in the if statment 
    };
    };
};
// console.log(counter6());

// continue in loops
//* continue will keep the loop running 

let Numb = 10;

function even () {
  for (i = 1 ; i <= Numb ; i++){
    if (i % 2 === 1){
      continue; //* this skipps the odd number, it says "if you find a number that % 2 === 1 skip it and continue"
    };
    console.log(`${i} is even`);
  };
};

console.log(even());

// while loops
//* I will turn the past even function into a while loop

let I = 1;
function numberChecker (){
  while (I <= Numb){
    if (I % 2 === 0){ //* this says "if you find I % 2 === o therefore even, print it"
        console.log(`${I} is even`); 
      }
    I++;
  }
}

console.log(numberChecker())

// do while loops
//* this loop runs the code then checks if the condtion is met, if yes the code will work if not it will be idle

let count = 1;

do {
  if (count % 2 === 0){
    console.log(`${count} is even`)
  }
  count++;
} while (count <= Numb);