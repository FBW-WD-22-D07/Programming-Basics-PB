"use strict";
// Scope (Geltungsbereich) ?
// Ort, an dem unsere Variablen "live" sind, wo wir auf sie zugreifen können, verfügbar sind

// BLOCK SCOPE = zwischen {} haben wir einen Blockscope für unsere definierten  Variablen darin!
// wir erben immer alle umgebenden Variablen
// sollten nach Möglichkeit bevorzugt werden.

// GLOBAL SCOPE = wird IMMER überall verfügbar sein.
// Versuche also, sie zu vermeiden, aber wenn Du sie brauchst, benutze sie!

// Was ist das noch mal?
const globalScope = "hello global scope";
// hier ist der globale scope (Geltungsbereich)

if (true) {
    //true case
    const blockScopeTrue = "hello block scope true";
    // nur innerhalb der if-Anweisung vorhanden
    console.log(blockScopeTrue);
    console.log(globalScope);
    // immer und überall zugänglich

    if (true) {
        console.log(blockScopeTrue);
        console.log(globalScope);
    }
} else {
    // false case
}

console.log(globalScope);
// console.log(blockScopeTrue); // ReferenceError: blockScopeTrue ist nicht defniert

// Ein Wort zur Einrückung und Lesbarkeit
// Mein Tipp => immer 4 Leerzeichen einrücken => 1 TAB
// hilft bei der Fehlersuche und so weiter...

// Unterschied zwischen var und const
// Die var-Anweisung deklariert eine Variable mit Funktions- oder Global-Scoping und initialisiert sie optional mit einem Wert.

{
    var hello = "world";
    // wenn möglich mit allen Mitteln zu vermeiden
    // ES GIBT KEINEE PRÜFUNG AUF VORHANDEN VARS!
    var hello = "bla";
}
console.log(hello); // Der Geltungsbereich ist IMMER global // Sickereffekt

const globally = "I need this everywhere"; // globally available; checks for existence
{
    //Die const-Anweisung deklariert eine lokale Variable mit Block-Scoping und initialisiert sie optional mit einem Wert.
    const hello2 = "world";
    // const hello2 = "bla"; // SyntaxFehler: Der Bezeichner 'hello2' wurde bereits deklariert
}
// console.log(hello2); // außerhalb nicht verfügbar

const GLOBALLY = "need this to be everywhere";

{
    // Konstanten sind ähnlich wie Variablen, die mit dem Schlüsselwort const definiert werden, block-scoped. Der Wert einer Konstante kann nicht durch Neuzuweisung geändert werden, und sie kann nicht neu deklariert werden.
    const MY_NAME = "Martina";
    //MY_NAME = "Freundorfer"; TypeError: Assignment to constant variable.
    console.log(GLOBALLY);
}
console.log(GLOBALLY);
// console.log(MY_NAME); // außerhalb nicht verfügbar

// Wann sollte ich den if-Operator und wann den ternären Operator verwenden?

const date = "Wednesday";
if (date === "Wednesday") {
    console.log("it's midweek");
} else {
    console.log("it's not midweek");
}

console.log(date === "Wednesday" ? "it's midweek" : "it's not midweek");
// Bei nur einem Statment, ergibt es Sinn, den ternären Operator zu benutzen. Bei allen anderen Fällen muss man dann wieder den if-Operator benutzen.
// date === "Wednesday"
//     ? console.log("it's the mid week")
//     : console.log("it's not the mid week");

// Math problems
const number = 42;
// ist es möglich, durch 2 zu dividieren?
// => dann bitte durch 2 dividieren, nochmals durch 2 dividieren, beides auf die Konsole ausgeben.

// if (42 % 2 === 0) {
//     console.log(42 / 2);
//     console.log(42 / 2 / 2);
// }

if (42 % 2 !== 0) {
    console.log("not possible to divide by two");
} else {
    console.log(42 / 2);
    console.log(42 / 2 / 2);
}

// 42 % 2 !== 0 ? console.log("not possible to divide by two") : console.log(42 / 2); console.log(42 / 2 / 2); nicht möglich, in eine ternäre Form umzuwandeln
// wenn wir mehr als eine Anweisung haben
// zählen wir die Semikolons
// in jedem der wahren oder falschen Fälle!
