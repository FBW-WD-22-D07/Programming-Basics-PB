// Mathematical expressions:
// +, -, *, /, exponentiation- **, modulo- %

console.log(1 + 1); // 2
console.log("1 + 1"); // 1 + 1
console.log(1 + 100);

// concatenation
console.log("hello"+"World"); // helloWorld
console.log("2" + "3"); // 23
console.log("Good morning" + " Class " + 32); // Good morning Class 32

// modulo: % gibt den Restbetrag zurück
console.log(10 % 3); // 1     (10 / 3 = 3.3333 -> 3 * 3 = 9 -> 10-9 = 1 => 10 % 3)
console.log(500 % 2); // 0

// Operand: ist das, worauf die Operatoren angewendet werden.
let varOne = 8; 
console.log(varOne); // 8
varOne = -varOne;
console.log(varOne); // -8

// 5 * 2 -> Zwei operands 5 und 2

const varTwo = 5;
const varThree = 8;

console.log(varThree + varTwo); //13

// operator: + (, -, * ...)
// operands: 5 und 8
// operation: binär weil wir nur zwei operands

// Potenzierung - ** (exponentiation)
console.log(2 ** 2); // 4 (2 wird zweimal Mal genommen mit sich selber = 2 * 2)
console.log(2 ** 3); // 8 (2 * 2 * 2, 3-mal)

// String Verktettung (concatinations) mit binären

const strOne = "Hello";
const strTwo = "World";

console.log(strOne + " " + strTwo); // Hello World

console.log("2" + 1); // "21"
console.log(1 + "2"); // "12"
console.log(2 + 2 +"1"); // 41 (2+2=4 -> 4 + "1" -> 41)
console.log("2" + 2 + 1); // 2218 
console.log("2" + (2 + 1)); // 23

// BODMAS: (2 + 1) * 5 / 4 = 3.25

// Bracket
// Devide
// Multiply
// Add
// Subtract
// ------------x-----------

let myVar = 2;
myVar = myVar + 5;
console.log("myVar ist " + myVar); // myVar ist 7

myVar = myVar * 2;
console.log("myVar ist " + myVar); // myVar ist 14

myVar += 5; // Kurzschreibweise von Zeile 61
myVar *= 2; // Kurzschreibweise von Zeile 64

let myVar2 = 2;
myVar2 *= 3 + 5; // myVar2 *= (3 + 5) rechte Seite wird zuerst gerechnet
console.log(myVar2); // 16



// increment ++
// decrement --

let counter = 2;
// postfix form
counter++; // counter += 1; counter = counter + 1;
console.log("Counter is " + counter); // Counter is 3


let counter2 = 2;
counter2--; // counter2 -= 1; -> counter2 = counter2 - 1;
console.log("Counter2 is " + counter2); // Counter 2 is 1

// console.log(5++); error!!!!

let counter3 = 2;
++counter3; //prefix form  // counter3 += 1; -> counter3 = counter3 + 1;
console.log("Counter3 is " + counter3);