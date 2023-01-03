// Numbers
// In JavaScript kürzt man eine Zahl ab, in dem amn den Buchstaben "e" an die Zahl anhängt und die Anzahl der Nullen angibt:
// Mit anderen Worten: "e" multipliziert die Zahlt mit 1 und der angegebenen Anzahl von Nullen.

const billion = 1e9; // 1 milliarde (billion), wörtlich: e ist 1 und 9 Nullen

console.log(billion);

console.log(1.23e6); // 1.23 * 1000000 = 1230000

//
const microSecond = 1e-6; // 0.000001: sechs Nullen nach links von 1
// Wenn wir die Nullen von 0.000001 zählen, gibt es 6 davon. Deswegen 1e-6.
console.log(microSecond);
// ---------------------####--------------------
// toFixed()
const sum = 0.1 + 0.2;
console.log(sum);

const fixSum = sum.toFixed(2);
console.log(fixSum); // 0.30

// toFixed gibt immer einen String zurück
console.log(typeof fixSum); // string

//---------------------###-----------------------------
// NaN stellt einen Fehler dar.
// NaN gehört zu dem Typ Number, es ist aber keine "normale" Zahl, weshalb es spezielle Funktionen gibt, um sie zu überprüfen:
// 1. isNaN(value) wandelt sein Argument in eine Zahl um und prüft dann, ob sie NaN ist:

console.log(isNaN(NaN)); // true
console.log(isNaN(1)); // false
console.log(isNaN("str")); // true

// Der Wert NaN ist insofern einzigartig, als er keinem Wert entspricht, auhc nicht sich selbst:
console.log(NaN === NaN); // false
// aber ...
console.log(typeof NaN); // number

// 2. isFinite(value) wandelt sein Argument in eine Zahl um und gibt true zurück, wenn es eine reguläre Zahl oder nicht NaN/Infinity/-Infinity ist:

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, weil ein besonderer Wert: NaN

console.log(isFinite(Infinity)); // false, weil ein besonderer Wert: Infinitiy (Unendlich ist nicht Endlich)

//--------------------###-----------------------
// parseInt und parseFloat

console.log(typeof "100px"); // string or NaN

// Im wirklichem Leben haben wir oft Werte in Einheiten, wie z. B. "100px" oder "12pt" in CSS. Oft ist es auch bei Währungen sehr praktisch, weil oft in verschiedenen Ländern die Zahl direkt mit dem Währungssymbol angegeben wird z. B. "19€". Wir können so dann einen numerischen Wert aus dem String extrahieren.
// parseInt() und parseFloat() "lesen" eine Zahl aus einem String (Zeichenkette), bis sie es nicht mehr können.
// Die Funktion parseInt gibt eine Ganzzahl zurück, während parseFloat eine Fließkommazahl zurückgibt:

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5
// Es gibt Situationen, in denen parseInt/parseFloat NaN zurückgibt. Dies geschieht, wenn keien Ziffer gelesen werden konnte:
console.log(parseInt("a123")); // NaN, das erste Zeichen hält den Prozess an.
