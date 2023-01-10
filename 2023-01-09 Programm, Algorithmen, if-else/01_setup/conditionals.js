// Conditional Statements if-else

// Logisches Denken:
// //Sonnig
// 1. wenn die Sonne scheint,ziehe kurze Hosen und ein leichtes Oberteil an
// 2. wenn sonnig, trage eine Mütze oder einen Hut
// //Regen
// 1. bei Regen einen Regenschirm mitnehmen
// 2. bei Regen einen Regenmantel tragen
// 3. wenn es regnet, benutze nach Möglichkeit ein Auto
// // Bewölkt
// 1. wenn bewölkt, zieh dich so gut wie möglich an
// 2. wenn bewölkt, trage Schuhe deiner Wahl
// // Schnee
// 1. bei Schnee trage eine Winterjacke oder einen Mantel
// 2. wenn Schnee, trage Schneestiefel
// 3. bei Schnee prüfe den Verkehr, bevor du rausgehst

// let weather = "Snowy";

// if (weather === "Sunny") {
//   console.log("Bringe deine Sonnenbrille mit.");
// }

// if (weather === "Rainy") {
//   console.log("Nimm einen Regenschirm mit.");
// }

// if (weather === "Snowy") {
//   console.log("Trage eine Regenjacke.");
// }

// Manchmal müssen wir verschiedene Aktionen auf der Grundlage verschiedener Bedingungen durchführen.
// Die if(...)-Anweisung wertet eine Bedingung in Klammern aus und führt, wenn das Ergebnis wahr ist, einen Codeblock aus.

// 1.
// Input: 21 und 3.
// wenn 21 durch 3 teilbar ist, dann print- Ja, 21 ist ein Vielfaches von 3
// wenn 21 nicht durch 3 teilbar ist, dann drucke- Nein, 21 ist kein Vielfaches von 3

if (21 % 3 === 0) {
  console.log("Ja, 21 ist ein Vielfaces von 3");
} else {
  console.log("Nein, 21 ist kein Vielfaches von 3");
}

// ---------###--------
// 2.
// Input: varA and varB
// wenn varA nicht gleich varB ist, print- Boolesche Werte sind nicht gleich Zeichenketten!
// sonst: print- Boolesche Werte sind gleich Zeichenketten!

let varA = false; //  -> falsy
let varB = "false"; // -> truthy
// Die if (...)-Anweisung wertet den Ausdruck in den Klammern aus und (wandelt das Ergebnis einen booleschen Wert um.) prüft ob der String falsy/truthy ist.
if (varA != varB) {
  console.log("Boolesche Werte sind nicht gleich Zeichenketten!");
} else {
  console.log("Boolesche Werte sind gleich Zeichenkette!");
}

// ---------###--------
// 3.
// Wir können auch einen vorausgewerteten booleschen Wert an if übergeben, etwa so:

// Input: year und cond
// Wenn die Bedingung erfüllt ist, dann drucken Sie - Ja, es ist 2020.
// sonst, print- Du bist nicht auf dem neuesten Stand.

let year = 2020;
let cond = year == 2020; // let cond = false

if (cond) {
  console.log(`Ja, es ist ${year}.`);
} else {
  console.log("Du bist nicht auf dem neuesten Stand.");
}

// ---------###--------
// 4.
// Manchmal müssen wir eine Variable abhängig von einer Bedingung zuweisen.
let accessAllowed;
let age = 17;

// Input: age
// wenn das Alter größer als 18 ist, wird der Zugang erlaubt (accessAllowed ist true)
// sonst Zugang verweigern (accessAllowed ist falsch)

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
console.log(accessAllowed);

// ---------###--------
// 5.
let time = 21;
let greeting;

if (time < 10) {
  greeting = "Good morning!";
} else {
  greeting = "Good evening!";
}

console.log(greeting);

// ---------###--------
// 6.

// Input: company, language, statementTrue and statementFalse
// wenn das Unternehmen Netscape ist, Ausgabe der true-Anweisung
// ansonsten Ausgabe der false-Anweisung

let company = "Netscape";
let language = "JavaScript";
let statementTrue = `${company} entwickelte ${language}.`;
let statementFalse = `${company} entwickelte nicht ${language}.`;

if (company == "Netscape") {
  console.log(statementTrue);
} else {
  console.log(statementFalse);
}

// ---------###--------
// 7.

// Inputs:
// weather
// nichtBraunWerden

// Mögliche Outputs:
// "Vergiss deine Sonnenbrille nicht!"
// "Sonnenschutzmittel nicht vergessen"
// "Viel Spaß!"
// "Vergiss deinen Regenschirm nicht!"

// wenn das Wetter sonnig ist ODER das Wetter verschneit ist, gebe aus - "Vergiss deine Sonnenbrille nicht!"
// wenn Du nicht braun werden willst, gebe aus "Sonnenschutzmittel nicht vergessen", ansonsten ausgeben "Viel Spaß!"
// ansonsten gebe aus "Vergiss deinen Regenschirm nicht!"

const weather = "rainy";
if (weather === "sunny" || weather === "snowy") {
  // eine Blockbereich starten
  // true case
  console.log("Vergiss deine Sonnenbrille nicht!");
  // Unerfüllte Fälle werden überspruchen => also weglassen, wenn nicht der fall!
  const nichtBraunWerden = false;
  if (nichtBraunWerden === true) {
    console.log("Sonnenschutzmittel nicht vergessen!");
  } else {
    console.log("Viel Spaß!");
  }
} else {
  // der defaul cas (Standartfall) => Fallback
  // false case
  console.log("Vergiss deinen Regenschirm nicht!");
}

// ---------###-----------------###--------
// Several conditions: “else if”

// 1.

// Input:
// time2

// Möglich Outputs
// "Good morning!"
// "Good day!"
// "Good evening!"

// Wenn time2 kleiner als 10 ist, lautet die Begrüßung "Good morning!", greeting2 ausgeben.
// Wenn time2 größer/gleich 10 UND kleiner als 20 ist, ist greeting "Good day!", gebe greeting2 aus.
// Ansonsten ist greeting2 "Good evening!", gebe greeting2 aus.

const time2 = 9;
let greeting2;

if (time2 < 10) {
  greeting2 = "Good morning!";
} else if (time2 >= 10 && time2 < 20) {
  greeting2 = "Good day!";
} else {
  greeting2 = "Good evening!";
}

console.log(greeting2);

// ---------###--------
// 2.

let firstName = "John";
let agE = 25;

// Input: firstName und agE

// Wenn agE weniger als 13 Jahre beträgt, gebe aus ${firstName} ist ein Kind.
// Wenn agE größer/gleich 13 UND kleiner als 20 ist, gebe aus ${firstName} ist ein Teenager.
// Wenn agE größer/gleich 20 UND kleiner als 30 ist, drucke ${firstname} ist ein junger Erwachsener.
// Sonst gebe aus ${firstname} ist ein Erwachsener.

if (agE < 13) {
  //falsy
  console.log(`${firstName} ist ein Kind`);
} else if (agE >= 13 && agE < 20) {
  // truthy && falsy -> falsy
  console.log(`${firstName} ist ein Teenager`);
} else if (agE >= 20 && agE < 30) {
  // truthy && truthy -> truthy
  console.log(`${firstName} ist ein junger Erwachsener`);
} else {
  console.log(`${firstName} ist ein Erwachsener`);
}
