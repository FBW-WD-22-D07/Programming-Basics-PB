// Funktionen sind die wichtigsten "Bausteine" des Programms. Sie ermöglichen es, den Code viele Male aufzurufen, ohne sich zu wiederholen.

// Um eine Funktion zu erstellen, können wir eine Funktionsdeklaration verwenden.
// Syntax:
// function name() {
//     body of the function
// }

// 1.
function printMessage() {
    console.log("This is a function!");
}

// call function printMessage.
printMessage(); // This is a function!

// purpose of functions: avoid duplication
printMessage();

// ---------##---------
// 2.
// Die Funktion hat vollen Zugriff auf die äußere Variable. Sie kann sie auch ändern.

let userName = "John";

function showMessage2() {
    userName = "Bob";
    const message = `Hello ${userName}`;
    console.log(message);
}

showMessage2(); // Hello Bob

// Wenn eine gleichnamige Variable innerhalb der Funktion deklariert wird, überschattet sie die äußere Variable.
// Im nachstehenden Code verwendet die Funktion zum Beispiel die lokale Variable userName.
console.log(userName); // Bob
// console.log(message);   // ReferenceError: message is not defined

// ---------##---------
// Global Scope
// Die äußere Variable wird nur verwendet, wenn es keinen lokalen Bereich gibt.
// Wenn eine gleichnamige Variable innerhalb der Funktion deklariert ist, wird die äußere Variable angezeigt.
// Globale Variablen sind von jeder Funktion aus zugänglich.

// 3.
// Eine innerhalb einer Funktion deklarierte Variable ist nur innerhalb dieser Funktion verfügbar.

const userName2 = "Jane"; // read-only variables

function printHello() {
    const userName2 = "Doe"; //
    const message = `Hello ${userName2}`;
    console.log(message);
}
// const userName2 = "Doe"; // SyntaxError: Identifier 'userName2' has already been declared
printHello(); // Hello Doe
console.log(userName2); // Jane

// ---------##---------
// A word on naming functions:
// Funktionen sind Aktionen. Daher ist ihr Name normalerweise ein Verb. Er sollte kurz und so genau wie möglich sein und beschreiben, was die Funktion tut,
// so dass jemand, der den Code liest, einen Hinweis darauf erhält, was die Funktion tut.

// Es ist eine weit verbreitete Praxis, eine Funktion mit einem verbalen Präfix zu beginnen, das die Aktion vage beschreibt.
// Innerhalb des Teams muss eine Einigung über die Bedeutung der Präfixe bestehen.

//Beispielsweise zeigen Funktionen, die mit "show" beginnen, normalerweise etwas an.

// Function starting with…

// "get…" – einen Wert zurückgeben,
// "calc…" – etwas berechnen,
// "create…" – etwas schaffen,
// "check…" – etwas prüfen und einen booleschen Wert zurückgeben, usw.
