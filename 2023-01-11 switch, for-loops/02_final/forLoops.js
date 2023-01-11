// Loops werden verwendet, um unsere Anweisungen zu wiederholen.

// In der Informatik ist eine Schleife eine Folge von Anweisungen, die so lange wiederholt wird, bis eine bestimmte Bedingung erfüllt ist.

// ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"]

//  for loop

//  syntax: for(begin; condition; step) { ....render the image.... }

// begin(i = 0) : Wird einmal beim Eintritt in die Schleife ausgeführt.

// condition(i <= 3): Wird vor jeder Schleifeniteration geprüft. Wenn false, stoppt die Schleife.

// body({console.log(i)}): Läuft immer wieder, solange die Bedingung erfüllt ist.

// step(i++): Wird bei jeder Iteration nach dem Körper ausgeführt.

// 1.
// Starte eine Schleife, um Zahlen zu drucken, die bei 0 beginnen und bei 3 enden.
for (let i = 0; i <= 3; i++) {
    console.log(i);
}

// loop 1:
// i = 0,
// Bedingung prüfen
// Körper ausführen: console.log(i);
// i = i + 1
// i = 1

// loop 2:
// i = 1,
// Bedingung prüfen
// Körper ausführen: console.log(i);
// i = i + 1
// i = 2

// loop 3:
// i = 2
// Bedingung prüfen
// Körper ausführen: console.log(i);
// i = i + 1
// i = 3

// loop 4:
// i = 3
// Bedingung prüfen
// Körper ausführen: console.log(i);
// i = i + 1
// i = 4

// loop 5:
// i = 4
// Bedingung prüfen: false
// loop stopt!!!

// Output:
// 0 - loop 1
// 1 - loop 2
// 2 - loop 3
// 3 - loop 4

// -----------##-----------
// Tasks:
// 1. Ausgabe des Wertes von i, wenn i bei 0 beginnt und i kleiner als 3 ist.

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// 0
// 1
// 2

// --------##--------

// 2. Ausgabe des Wertes von i, wenn i mit 1 beginnt und i kleiner/gleich 3 ist.

for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// 1
// 2
// 3

// -----------##-----------
// 2.
let anything;
for (anything = 0; anything <= 10; anything++) {
    console.log(anything);
}
console.log("Value of anything:", anything);

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Wert von anything: 11

// --------##--------
// 3.

// let i;
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// console.log("Value of i:", i);  // ReferenceError: i is not defined

// --------##--------
// 4.

let i; // i in global scope
for (let i = 0; i <= 5; i++) {
    // i in block scope
    console.log(i);
    console.log("Value of i:", i);
}
console.log("Value of i:", i); // Value von i: undefined

// 0
// Value von i: 0
// 1
// Value von i: 1
// 2
// Value von i: 2
// 3
// Value von i: 3
// 4
// Value von i: 4
// 5
// Value von i: 5

// ---------##---------
// 5.

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log(`Sum = ${sum}`);
}
// Sum = 1
// Sum = 3
// Sum = 6
// Sum = 10
// Sum = 15

// ---------##---------
// 6.

let sum1 = "Hello";
for (let i = 3; i <= 5; i++) {
    sum1 = sum1 + 2;
    console.log(`Sum = ${sum1}`);
    // console.log(`i = ${i}`)
}

console.log(`Final Sum = ${sum1}`); // Final Sum = Hello222

// Sum = Hello2     i = 3
// Sum = Hello22    i = 4
// Sum = Hello222   i = 5

// i = 3
// i++: i = i + 1;
// i = 4
// i++: i = i + 1;
// i = 5

// --------##--------
// 7.

let myVar = "Hello";
for (let i = 5; i <= 10; i++) {
    myVar = myVar + i;
    console.log(`myVar = ${myVar}`);
}

// myVar = Hello5
// myVar = Hello56
// myVar = Hello567
// myVar = Hello5678
// myVar = Hello56789
// myVar = Hello5678910

// ---------##---------
// 8.

let counter = 10;
let finalNumb = 0;
for (let i = 0; i <= counter; i++) {
    finalNumb = finalNumb + i;
    console.log(finalNumb);
}

// 0    i = 0
// 1    i = 1
// 3    i = 2
// 6    i = 3
// 10   i = 4
// 15   i = 5
// 21   i = 6
// 28   i = 7
// 36   i = 8
// 45   i = 9
// 55   i = 10

// ---------##---------
// for loop on string

// 1.
const myString = "Digital Career Institute";

console.log(myString.length); // 24
console.log(myString[2]); // g

for (let i = 0; i < myString.length; i++) {
    console.log(`The index of ${myString[i]} is ${i}`);
}
console.log(`${myString[8]}`); // C

// The index of D is 0
// The index of i is 1
// The index of g is 2
// The index of i is 3
// The index of t is 4
// The index of a is 5
// The index of l is 6
// The index of   is 7
// The index of C is 8
// The index of a is 9
// The index of r is 10
// The index of e is 11
// The index of e is 12
// The index of r is 13
// The index of   is 14
// The index of I is 15
// The index of n is 16
// The index of s is 17
// The index of t is 18
// The index of i is 19
// The index of t is 20
// The index of u is 21
// The index of t is 22
// The index of e is 23
// C

// ---------##---------
// 2.

const myString2 = "Hello World!";
let newStr = "";

for (let i = 0; i < myString2.length; i++) {
    let S = myString2[i];
    newStr = newStr + S;
    console.log(newStr);
}
// H
// He
// Hel
// Hell
// Hello
// Hello
// Hello W
// Hello Wo
// Hello Wor
// Hello Worl
// Hello World
// Hello World!

// ---------##---------
// 3.

let worD = "hello";
for (let i = worD.length; i >= 0; i--) {
    console.log(worD[i]);
}

// undefined // weil i von word.length ausgeht und die Länge einer Zeichenkette immer größer ist als der letzte Index.
// o
// l
// l
// e
// h

// SO

const word = "hello";

for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);
}

// o
// l
// l
// e
// h

// ---------##---------
// for loop auf array

// 1.
const fruits = [
    "Apple", // index 0  element-1
    "Orange", // index 1  element-2
    "Banana", // index 2  element-3
    "Melon", // index 3  element-4
    "Lemon", // index 4  element-5
];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(`${fruit}!`);
}
// Apple!
// Orange!
// Banana!
// Melon!
// Lemon!

// ---------##---------
// 2.

const fruits2 = [
    "Apple", // index 0  element-1
    "Orange", // index 1  element-2
    "Banana", // index 2  element-3
];

const newArr = [];
for (let i = fruits2.length - 1; i >= 0; i--) {
    newArr.push(fruits2[i]);
}

console.log(newArr); // [ 'Banana', 'Orange', 'Apple' ]

console.log(fruits2); // [ 'Apple', 'Orange', 'Banana' ]

console.log(fruits2.length); // 3

console.log(fruits2.length - 1); // 2

console.log(fruits2[0]); // fruits2[i] - Apple

// ---------##---------
// 3.

const fruits3 = ["Apple", "Orange", "Banana"];
for (let i = 0; i < fruits3.length; i++) {
    const fruit = fruits3[i];
    console.log(fruit);
}

// Apple
// Orange
// Banana

// ---------##---------
