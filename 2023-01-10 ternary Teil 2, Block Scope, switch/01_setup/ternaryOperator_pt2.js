// const a = 1;
// const b = 2;

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// console.log(a > b ? a : b);

// ---------###--------
// 4.

// Prüfe, ob der Name des Unternehmens Netscape lautet.
// Wenn true, gebe aus 'Netscape created JavaScript'
// Wenn false, gebe aus 'No contributions known'.
// Speichere die Ausgabe eine einer Variablen namens 'contribution'

const company = "Netscape";
const language = "JavaScript";
// let contribution;
// if (company === "Netscape") {
//     contribution = "Netscape created JavaScript";
// } else {
//     contribution = "No contributions known";
// }

const contribution =
    company === "Netscape"
        ? `${company} created ${language} `
        : "No contributions known";

console.log(contribution);

// ---------###--------
// 5.

const agE = 20;

// Ist agE kleiner 13
// speichere "Hallo Kleiner!"
// Ist agE kleiner 18
// speichere "Hallo"
// Ist agE größer 18 UND agE kleiner 100
// speichere "Grüße"
// Ansonsten
// Speicher "Was für eine ungwöhnliches Alter"

const message =
    agE < 13
        ? "Hallo Kleiner!"
        : agE < 18 // else if
        ? "Hallo"
        : agE > 18 && agE < 100 // else if
        ? "Grüße"
        : "Was für eine ungwöhnliches Alter"; // else

console.log(message);

// ---------###--------
// 6.

const varOne = 10;
const varTwo = 10;

// Prüfen, ob varOne größer/gleich varTwo ist UND 120 durch 2 teilbar ist
// ODER varOne multipliziert mit 260 ist 2600,
// dann "Heya!" ausgeben.
// und prüfe, ob 12 größer als 2 ist, wenn ja, gebe aus- 'The condition is true.', sonst gebe aus- 'The condition is false.'
// Erstellen Sie eine lokale Variable namens varThree mit dem Wert 1.
// Prüfe, ob varThree existiert. Wenn ja, gebe aus - "varThree exists!".

if ((varOne >= varTwo && 120 % 2 === 0) || varOne * 260 === 2600) {
    console.log("Heya!");
    // 12 > 2
    //     ? console.log("The condition is true.")
    //     : console.log("The condition is false.");

    //        // condition      //if truthy                 // if falsy
    console.log(12 > 2 ? "The condition is true." : "The condition is false.");

    const varThree = 1;
    if (varThree) {
        console.log("varThree exists!");
    }
    // console.log(varThree && "varThree exists!");
} // no else blcok required! (Hier wird kein Else-Block benötigt)
