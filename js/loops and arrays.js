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