// ARRAYS
/** Arrays sind geordnete Sammlungen, die eine erstes, ein zweites, ein drittes Element usw. haben.
 *  Die Elmente werden durch Komma getrennt.
 *  Die Elemente sind veränderlich
 */

// Declaration:
// Für die Erstellung eines leeren Arrays gibt es zwei verschiedene Schreibweisen:

const arr = new Array();
console.log(arr); // []

const arr2 = [];
console.log(arr2); // []

let fruits = [];
console.log(typeof fruits); // object

fruits = ["Apple", "Orange", "Banana", "Melon", "Lemon"];
console.log(fruits); // ["Apple", "Orange", "Banana", "Melon", "Lemon"]
console.log(fruits[0]); // Apple
console.log(fruits.length); // 5

//-----------------####----------------

// Wir können ein Element in einem Array ersetzen:
console.log(fruits[0]); // Apple

fruits[0] = "Cherry";
console.log(fruits); // [ 'Cherry', 'Orange', 'Banana', 'Melon' ]

// … oder wir fügen dem Array ein neues hinzu:
fruits[6] = "Grapes";
console.log(fruits);

// Löschen von Werten in einem Array

// Da Arrays Objekte sind, werden die Elemente als Werte und die Indizes als Schlüssel gespeichert.
// delete obj.key löscht einen Wert es keys (Schlüssel)
delete fruits[fruits.length - 1]; //delete fruits[6]
console.log(fruits); // [ 'Cherry', 'Orange', 'Banana', 'Melon', x, y ]

//-----------------####----------------

// Werte-Mix

const mixtureOfData = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];

console.log(mixtureOfData); // [ 'Apple', { name: 'John' }, true, [Function (anonymous)] ]

// das Objekt mit dem Index 1 erhalten und dann seinen Namen anzeigen
console.log(mixtureOfData[1].name); // John

// die Funktion bei Index 3 abrufen und dann ausführen
mixtureOfData[3](); // hello

//-----------------####----------------####------------------

// Array Methods
// Methoden zum Hinzufügen und Entfernen von Elementen am Anfang oder am Ende: push(), pop(), shift(), unshift().

const fruits2 = ["Apple", "Orange", "Banana", "Melon", "Lemon"];

console.log(fruits2);

// pop() und push() arbeiten mit dem Ende des Arrays.
// pop(): extrahiert das letzte element eines Arrays und gibt es zurück.

const var1 = fruits2.pop();
console.log(fruits2); // [ 'Apple', 'Orange', 'Banana', 'Melon' ]
console.log(var1);

fruits2.pop();
console.log(fruits2); // [ 'Apple', 'Orange', 'Banana' ]

// ------##------
// push(): Das Element wird an das Ende des Arrays angehängt

fruits2.push("grapes");
console.log(fruits2);

// ------------##----------------
// shift(): extrahiert das erste Element des Arrays und gibt es zurück.
console.log("Original fruits array:", fruits2); // [ 'Apple', 'Orange', 'Banana', 'grapes' ]

const shiftedItem = fruits2.shift();
console.log("array after shift():", fruits2);
// [ 'Orange', 'Banana', 'grapes' ]
console.log("Shifted item stored as another variable: ", shiftedItem); // Apple

// ------##------
// unshift(): Element am Anfang des Arrays hinzufügen
console.log("Original fruits array:", fruits2); // Original fruits array: ['Orange', 'Banana', 'grapes']

fruits2.unshift("Lemon", "kite");
console.log(fruits2); // [ 'Lemon', 'kite', 'Orange', 'Banana', 'grapes' ]

// Eine QUEUE ist eine der häufigsten Verwendungen eines Arrays. In der Informatik bedeutet dies eine geordnete Sammlung von Elementen, die zwei Operationen unterstützt:

// push/unshift fügt ein Element an das Ende/Anfang an.
// shift/pop holt ein Element vom Anfang/Ende und schiebt die Warteschlange vor/nach hinten, so dass das zweite Element zum ersten wird.

// Arrays unterstützen beide Operationen.
// In der Praxis brauchen wir sie sehr oft. Zum Beispiel eine Warteschlange von Nachrichten, die auf dem Bildschirm angezeigt werden müssen.

// ------##------

// Es gibt einen weiteren Anwendungsfall für Arrays - die Datenstruktur namens STACK.

// Es unterstützt zwei Operationen:
// push fügt ein Element an das Ende an.
// pop nimmt ein Element vom Ende.
// Neue Elemente werden also immer vom "Ende" her hinzugefügt oder entnommen.

// ------------##----------------

//splice()

const greeting = ["Have", "a", "nice", "day!"];

greeting.splice(0, 1); // ab Index 0 ein Element entfernen
console.log(greeting); // [ 'a', 'nice', 'day!' ]

greeting.splice(0, 2); // ab Index 0 zwei Elemente entfernen
console.log(greeting); // ['day!']

const greeting2 = ["Have", "a", "nice", "day!"];
// Entferne die ersten 3 Elemente und ersetze sie durch andere.
const removedElments = greeting2.splice(0, 3, "It's", "a", "beautiful");
console.log(greeting2); // [ "It's", 'a', 'beautiful', 'day!' ]
// splice gibt das Array der entfernten Elemente zurück:
console.log(removedElments); // [ 'Have', 'a', 'nice' ]

// Jetzt können wir push() verwenden, um Elemente zum Array removedElements hinzuzufügen.
removedElments.push("evening!");
console.log(removedElments); // [ 'Have', 'a', 'nice', 'evening!' ]

const statement1 = ["We", "are", "learning", "the", "language", "JavaScript"];

statement1.splice(4, 0, "programming", "100", true);

console.log(statement1); // ['We', 'are', 'learning', 'the', 'programming', 'language', 'JavaScript']

// In Array-Mathodne sind negative Indizes erlaubt.
// sie geben die Positoin ab dem Ende des Arrays an.

const nubmersArr = [1, 2, 5];
// ab Index- 1 (ein Schritt vom ende) 0 elemnte löschen, dann 3 und 4 einfügen
nubmersArr.splice(-1, 0, 3, 4);

console.log(nubmersArr); // [ 1, 2, 3, 4, 5 ]

// ------------##----------------
// slice()
const numbersArr2 = [0, 1, 2, 3, 4, 5, 6];
const slicedEelements = numbersArr2.slice(0, 3); // von index 0 bis 2
console.log("original array:", numbersArr2); // original array: [0, 1, 2, 3,4, 5, 6]
console.log("sliced elements:", slicedEelements); // sliced elements: [ 0, 1, 2 ]

// ------------##----------------
// concat()

const numbersArr3 = [1, 2];
const concatNumbers = numbersArr3.concat([3, 4]);
console.log(concatNumbers); // [ 1, 2, 3, 4 ]
console.log(numbersArr3); // [ 1, 2 ]

let concat2Arrays = numbersArr3.concat([3, 4], [5, 6]);
console.log(concat2Arrays); // [ 1, 2, 3, 4, 5, 6 ]

const concatStringsToArrays = numbersArr3.concat([3, 4], "hello", "holla");
console.log(concatStringsToArrays); // [ 1, 2, 3, 4, 'hello', 'holla' ]

// arrays are mutable (array können verändert werden)
concat2Arrays = concat2Arrays.concat([7, 8]);
console.log(concat2Arrays); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const testArray1 = ["hello"];
const testArray2 = ["world"];

const concatTwoArrays = testArray1.concat(testArray2);
console.log(concatTwoArrays);

// ------------##----------------
// reverse()
// Die Methode reverse kehrt die Reihenfolge der Elemente in arr um.
const aNewArray = [1, 2, 3, 4, 5];
aNewArray.reverse();
console.log(aNewArray);

// indexOf()
const anotherArray = ["hello", "world"];
console.log(anotherArray.indexOf("hello")); // 0
console.log(anotherArray.indexOf("hello", 1)); // -1

// includes()
console.log(anotherArray.includes("hello")); // true
console.log(anotherArray.includes("hello", 1)); // false

// join() - join verwandelt ein Arrray in eine Zeichenkette (String)
const newVariable = anotherArray.join("-");
console.log(newVariable); // hello-world
console.log(typeof newVariable); //string

// ---------###--------

// sort()

const newNumArray2 = [1, 2, 15];
newNumArray2.sort();
console.log(newNumArray2);

const newNumArray3 = [1, 2, 15, -4362346, "string", "abc", "1"];

newNumArray3.sort();
console.log(newNumArray3); // [ -4362346, 1, '1' , 15, 2, 'abc', 'string' ]
console.log(typeof newNumArray3); // object

//toString()
const fruits3 = ["Apple", "Orange", "Banana", "Melon", "Lemon"];
console.log(fruits3);

const arrayToString = fruits3.toString();
console.log(arrayToString); // Apple,Orange,Banana,Melon,Lemon

console.log(typeof arrayToString); // string
console.log(arrayToString[3]); // l
