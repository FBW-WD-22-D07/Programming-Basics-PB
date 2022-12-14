// STRINGS
const myString = "Es ist ein wunderschöner Tag!";

console.log(myString); //Es ist ein wunderschöner Tag!

// bracket notation for strings
console.log(myString[0]); // E
console.log(myString[1]); // s
console.log(myString[2]); // Leerzeichen (space)

// length / Länge
// Punktnotation (dot notation)
console.log(myString.length) // 29

const str1 = "25"
console.log(str1[1]); // 5

// NUMBERS
// 1. Interger / Ganze Zahlen
// 2. Float / Kommazahlen
// 3. + Infinity / + Unendlich
// 4. - Infinity / - Unendlich
// 5. NaN

const myNum = 50;
const numTwo = 2.22;
console.log(50 * Infinity); // Infinity
console.log(50 / Infinity); // 0

console.log(myString - 2); // NaN
console.log(str1 - 2); // 23

// Booleans

const booleanOne = true;
const booleanTwo = false;
let undefinedVariable;

console.log(Boolean(booleanOne)); //true
console.log(Boolean(booleanTwo)); //false
console.log(Boolean(myNum)); // true
console.log(Boolean(1)); //true
console.log(Boolean(0)); // false
console.log(Boolean(" ")); //true
console.log(Boolean("")); //false
console.log(Boolean(undefinedVariable)); //false

console.log(Boolean(false)); // false
console.log(Boolean("false")); // true

console.log(Boolean(NaN)); //false
console.log(Boolean(null)); // false

// UNDEFINED
const myPicture = "My Picture";
let profilePic;

console.log(profilePic); // undefined oder Wert wurde nicht zugewiesen

profilePic = myPicture;
console.log(profilePic); // value von myPicture

// NULL: nothing, empty, unknown value
const age = null;
const emptyString = null;
console.log(emptyString);

// Array

const myArray = [1,2,3,"hello","bye"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);

// OBJECTS: key:value Paar
const person = {
   name:"Dave",
   age:32, 
   citizen: true, 
   pets: ["dog1", "dog2"], 
   adress:{ 
      street: "abc-straße",
      houseNo: 44, 
      city:"Berlin"
   }
}
console.log(person);

// typeof operator

console.log(typeof booleanOne); // boolean
console.log(typeof true); // boolean
console.log(typeof "true"); // string
console.log(typeof "1"); // string
console.log(typeof 1); // number
console.log(typeof 1.1); // number
console.log(typeof undefined); // undefined
console.log(typeof undefinedVariable); // undefined
console.log(typeof person); // object
console.log(typeof myArray); // object
