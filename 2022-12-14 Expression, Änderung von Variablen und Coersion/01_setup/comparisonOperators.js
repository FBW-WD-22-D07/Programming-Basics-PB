// Boolean Expressions: Comparison Operators
// <, <=, >, >=, ==, ===, !=, !==

console.log(1 < 2); // true
console.log(2 <= 2); // true

console.log( 1 > 2); // false
console.log(3 >= 3); // true

console.log("1" > 2); // false.  JS compiler entfernt die Anführungszeichen und "1" wird als number behandelt.

console.log(1 == "1"); // true. schwacher Vergleich / Loose comparison (==)
console.log(1 === "1"); // false. strenge Vergleich / Strict comparison (===)

console.log( 1 != "1"); // false schwacher Vergleich / Loose comparison (==)
console.log( 1 !== "1"); // true strenge Vergleich / Strict comparison (===)

console.log("Z" > "A"); // true
console.log("A" > "Z"); // false
console.log("Blue" > "Blur"); // false
console.log("a" > "A"); //true

