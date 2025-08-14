// for loop explained on an array

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    //* here we created the const `cat` and assigend it for every value of the array `cats`
    console.log(cat);
}

// spicailty loops map() and filter()
//* those loops apply the needed changes and creat a new collection for it

function isCat (name) {
    //* this will add " is a cat" to each entry in the array and console.log will return an array
    // return(name + " is a cat");
    //* this will return each entry with " is a cat" attached to the end and will show undifined when using console.log
    return(console.log(name, "is a cat"));
}; //* this is used to test out map() 

const isItCat = cats.map(isCat);
// console.log(isItCat);