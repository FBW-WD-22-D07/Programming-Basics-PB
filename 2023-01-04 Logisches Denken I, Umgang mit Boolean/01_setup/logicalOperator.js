// LOGICAL OPERATORS
// && - and
// || - or // (AltGr und <)
// ! - not

const firstVar = 10;
const secondVar = 20;

console.log(firstVar < secondVar && firstVar == secondVar); // false
console.log(firstVar < secondVar || firstVar == secondVar); // true

console.log(firstVar < secondVar); // true

console.log(!(firstVar < secondVar)); // false

console.log(!(firstVar > secondVar)); // true

const thirdVar = 20;

console.log(
  firstVar < secondVar || (firstVar == secondVar && secondVar === thirdVar)
); // true
const var0 = 0;
const str = false || var0 || "hallo";
console.log(str);
console.log("Hello World" && 1 && true);

// && gibt den ersten false Wert zurück. Falls alle Werte true sind, wird der letzte Wert zurückgeben.
// || gibt den ersten true Wert zurück. Falls alle Werte False sind, wird der letzte Wert zurückgegeben.
// Folgende Werte geben imme false zurück: false, 0, "", null, undefined, NaN
