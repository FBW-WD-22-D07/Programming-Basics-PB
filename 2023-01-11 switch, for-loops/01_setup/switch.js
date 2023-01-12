// SWITCH CASE

// Wir prüfen, welchen Monat wir haben?
// January = 1
// February = 2
// March = 3
// ... 12 cases...

const month = 5;
// Welcher Monat ist das? Gebe es als Wort auf der Konsole aus!

if (month === 1) {
    console.log("Januar");
} else if (month === 2) {
    console.log("Februar");
} else if (month === 3) {
    console.log("März");
} else if (month === 4) {
    console.log("April");
} else if (month === 5) {
    console.log("Mai");
} else if (month === 6) {
    console.log("Juni");
} else if (month === 7) {
    console.log("Juli");
} else if (month === 8) {
    console.log("August");
} else if (month === 9) {
    console.log("September");
} else if (month === 10) {
    console.log("Oktober");
} else if (month === 11) {
    console.log("November");
} else if (month === 12) {
    console.log("Dezember");
} else {
    console.log("Error cases!!!");
}

// ...
// zu viel zu programmieren
// Wie können wies einfacher macen?

// eine anderer Ansatz
// SWITCH CASE
// für einfache Vergleiche
// Prüft ob zwei Elemente GlEICH sind.
// kann NICHT auf größer als/kleine als prüfen
// nicht-Gleich geht auch nicht

switch (month) {
    case 1:
        console.log("Januar");
        break; // MUSS DABEI STEHEN, SONST WERDEN ALLE ANDEREN FÄLLE MITGEPRÜFT UND DAS KOSTET ZEIT
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("März");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Mai");
        break;
    case 6:
        console.log("Juni");
        break;
    case 7:
        console.log("Juli");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("Dezember");
        break;
    default: // Standartfall, Backup, es MUSS da sein und am Ende stehen
        console.log("Error cases!!!");
    // braucht keinen "break", denn es ist die letzte Anweisung
}

const myMonth = "März";
// let monthInt;
switch (myMonth) {
    case "Januar": // logical OR
    case "Februar":
        if (myMonth === "Januar") {
            //block scope
            const message = "Hello winter!";
            console.log(message);
        } // console.log(message); ist außerhalb nicht verfügbar
        console.log("Es ist der erste oder der zweite Monat im Jahr");
        break;
    case "März":
        console.log("Es ist der dritte Monat im Jahr");
        break;
    case "April":
        console.log("Es ist der vierte Monat im Jahr");
        break;
    case "Mai":
        console.log("Es ist der fünfte Monat im Jahr");
        break;
    case "Juni":
        console.log("Es ist der sechste Monat im Jahr");
        break;
    case "Juli":
        console.log("Es ist der siebte Monat im Jahr");
        break;
    case "August":
        console.log("Es ist der Achte Monat im Jahr");
        break;
    case "September":
        console.log("Es ist der neunte Monat im Jahr");
        break;
    case "Oktober":
        console.log("Es ist der zehnte Monat im Jahr");
        break;
    case "November":
        console.log("Es ist der elfte Monat im Jahr");
        break;
    case "Dezember":
        console.log("Es ist der zwölfte Monat im Jahr");
        break;
    default:
        console.log("Error!!!");
}
// console.log(message);
// sehr nützlich für mehr als zwei einfache Fälle (Bedingung für Gleicheit)
// wir können weder && noch || verwenden
// wir können NICHT > oder < oder >=, <= verwenden
