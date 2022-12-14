// JS Variables
// Definieren einer variables option:
// 1. const ES6- ES2015
// 2. let   ES6- ES2015
// 3. var   (Vermeide)
// Verwendet grundsätzlich immer const, es sei denn, ihr braucht let. Vermeidet komplett var!


const otherName = "John";
console.log(otherName); // John
console.log("otherName"); // otherName

// camel case: customerName;
// snake case: customer_name;

console.log("---");
let firstName = "Kera";
console.log(firstName);

firstName = "Henna";
console.log(firstName);

firstName = 'Gerry';
console.log(firstName);

const lastName = `Lang`;
console.log(lastName);

// lastName = "Hello";       // error TypeError: Assignment to constant variable.
// console.log(lastName);
console.log("---");

// Verwendet niemals var, es sei denn, ihr müsst es WIRKLICH, WIRKLICH, WIRKLICH! (Ihr müsst es nicht.)

var otherName1 = "Dave";
console.log(otherName1); //Dave

var otherName1 = "Mona";
console.log(otherName1); // Mona

var otherName1 = "Lena";
console.log(otherName1); // Lena