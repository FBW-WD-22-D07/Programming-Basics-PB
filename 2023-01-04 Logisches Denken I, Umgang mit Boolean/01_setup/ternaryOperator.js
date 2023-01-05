// const result = bedingung ? value1 : value2

// Bedingung: true
// const result = value1

// Bedingung: false
// const result = value2

// TERNARY OPERATOR
// Dieser Operator wird druch ein Fragezeichen ? dargestellt. Er wird "ternär" genannt, weil der Operator drei Operanden hat.
// Es ist der einzige Operator in JavaScript, der so viele Oparanden hat.
// VERWENDUNG: Im Allgemeinen verwenden wir einen ternären Operator, wenn wir einer Variablen einen Wert auf der Grundlage einer Bedingung zuweisen wollen

// const c = a + b
// operator ist +
// operands: a und b, daher binär

// Syntax: const result = condition ? value1 : value2

// operator ist ?
// operand: condition, value1 und value2, daher tenär

// 1. Beispiel:
// Die Bedingung wird ausgewertet: Wenn sie wahr ist, wird Wert1 zurückgegeben, andernfalls - Wert2.
const age = 21;
const accessAllowed = age > 18 ? true : false;

console.log(accessAllowed);

//--------##-----------
// 2.

const weather = "sunny";
console.log(
  weather === "sunny"
    ? "Vergiss deine Sonnenbrill nicht!"
    : "Vergiss deinen Regenschirm nicht."
);

// -----------------###-------------
// 3.

const firstVar = 10;

const secondVar = 20;

const ternaryOp = firstVar < secondVar ? console.log(secondVar) : "Blah"; // 20

console.log(ternaryOp); // undefined
// console.log(console.log(secondVar))
