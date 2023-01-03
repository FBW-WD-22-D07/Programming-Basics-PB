// Math ist eine eingebautes Objekt, das über Eigenschaften und Methoden für mathematische Konstanten und Funktionenen verfügt. Es handelt sich nicht um ein Funktionsobjekt.
// Math arbeitet mit dem Typ Number. (Es funktioniert nicht mit BigInt.)

// Math.ceil()
// Die Funktion Math.ceil() rundet eine Zahl immer auf die nächstgrößere ganze Zahl auf.
// Math.ceil(null) gibt die ganze Zahl 0 zurück und führt nicht zu einem NaN-Fehler

console.log(Math.ceil(0.95)); // 1
console.log(Math.ceil(4)); // 4
console.log(Math.ceil(7.004)); // 8
console.log(Math.ceil(-0.95)); // -0
console.log(Math.ceil(-4)); // -4
console.log(Math.ceil(-7.004)); // -7
console.log(Math.ceil(null)); // 0
// ------------------ //

// Math.floor()
// Die Funktion Math.floor() gibt die größte ganze Zahl zurück, die kleiner oder gleich einer bestimmten Zahl ist.
console.log(Math.floor(45.95)); // 45
console.log(Math.floor(45.05)); // 45
console.log(Math.floor(4)); // 4
console.log(Math.floor(-45.95)); // -46
console.log(Math.floor(-45.05)); // -46
// ------------------ //
// Math.round()
console.log(Math.round(4.49)); // 4
console.log(Math.round(4.5)); // 5
// ------------------ //

// Math.random()
// Zufallszahl zwischen 0 und 1
// console.log("-----");
// console.log(Math.floor(Math.random() * 10));

// Die Funktion Math.random() gibt eine Pseudo-Zufallszahl im Beriech von 0 bis 1 zurück (einschließlich 0, aber nicht 1) mit annähernd gleichmäßiger Verteilung über diesen Bereich.
// Sie kann nicht vom Benutzer ausgewählt oder zurückgesetzt werden.
console.log(Math.random());
// ------------------ //

// Math.max()
// Die Funktion Math.max() gibt die größte aller übergebenen Zahlen zurück, welche als Eingabeparameter angegeben wurden.
console.log(Math.max(10, 20, 100)); // 100
console.log(Math.max(-10, -20, -5, -100)); // -5
console.log(Math.max(-10, "20", -5, -100)); // 20

// Math.min()
// Die statische Funktion Math.min() gbit die niedrichste zahl zurück, die ihr übegeben wurde, oder NaN, wenn eine Parameter keine Zahl ist und nicht in eine umgewandelt werden konnte.

console.log(Math.min(-10, -20, -5, -100)); // -100
console.log(Math.min("10", 20, 5, 100)); // 5
console.log(Math.min(-10, -20, 5, 100)); // -20
