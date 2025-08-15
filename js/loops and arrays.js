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
