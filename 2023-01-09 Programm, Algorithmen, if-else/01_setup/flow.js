// Allgemeine Einführung
// Was ist der normale Programablauf?

// Von oben nach unten! Normalerweise!
// Von links nach rechts "LTR"
console.log("Hallo");
console.log("Welt");

let number = 5;
console.log(++number);

// Logisches Denken
// Wie wird ein Programm auch genannt?
// Algorithmus
// Spezifischer Ablauf von Anweisungen
// Wie wird eine Eingabe in eine Ausgabe umgewandelt?
// EINGABE => ALGORITHMUS => AUSGABE

// Analysiere Probleme: Was ist die Einabe? Was ist die Ausgabe?
// Überlege, bevor Du anfängst zu programen
// was du machen musst, wenn Du eine Lasagne machen willst?
// Was sind die Schritt?

// 0. Lebensmitteleinkauf
// 1. INPUT: Zutaten? Nudeln, Gemüse, Bechamelsoße, Ragout
// 2. Den Ofen einschalten und vorheizen
// 3. Ragout kochen
// 4. Bechamelsoße kochen
// 5. Die Nudeln, und Bechamel und Ragout schichten
// 6. Die Nudeln in den Ofen schieben
// 7. 30 Minuten warten
// 8. OUTPUT (RÜCKGABE-WERT) (ERGEBNIS): LASAGNA
// 9. ESSEN!

// Die Reihenfolge ist wichtig, wir müssen dem Computer jedne einzelnen Schritt mitteilen.
// Er weiß nichts!!! Wir können googlen :D aber der Computer nicht.
// Wenn man nicht genau weiß, wie man eine Lasagne macht, muss man nach einem Rezept suchen! => den Algorithmus bekommen!

// DUMPLINGS-Rezept
// EINGABE: Mehl, Hefe, Gemüse, Frühlingszwiebeln, Karotten, Hackfleisch, Gewürze (Salz, Pfeffer, Zucker, Sojasoße ...)
// 1. den Teig herstellen ( 500g Mehl + 340g Wasser + 3g Hefe + 5g Salz + 15g zucker)
// 2. eine halbe Stunde ruhen lassen...
// 3. in der Zwischenzeit das Gmüse schneiden
// 4. die Gewürze mit dem Gemüse mischen und alles zusammengeben
// 5. kleine Teigkugeln nehmen, flach machen, Zutaten hineinlegen, einpacken!
// 6. wieder eine halbe Stunden ruhen lassen ...
// 7. Kochen: Alle DUMPLINGS in eine flache Pfanne mit 0,5cm Wasser geben, Deckel schließen => Dampfgaren
// 8. Heiß machen !!! 7-6 min
// 9. 15-20 Minuten kochen bei mittlerer Hitze
// 10. bis das Wasser weg ist => Gabeltest => Fertig?
// AUSGABE: DUMPLINGS
// ------------###-------------

// Lösungen finden: Wir werden mit einer Menge Problem konfrontiert.
// Wie können wir etwas erreichen? => Algorithmen schreiben
// EIN REZEPT IST WIE EIN ALGORITHMUS
// SEI SO PRÄZISE WIE MÖGLICH!
// BEST PRACTICES
// Don't repeat yourself => DRY Principle

// Input  => Algorithmus => Output
// 2, 5   => Blackbox    => 5
// 0, 100 => Blackbox    => 100
// 52, 35 => Blackbox    => 52

// (Blackbox:)
// Sei a die erste Eingabe.
// Sei b die zweite Eingabe.
// Wenn a größer als b ist, drucke a.
// Wenn b größe als a ist, drucke b.

// Allgemeine Regel?
// die größte Zahl finden
// Wie können wir die größte Zahl finden?

// Lösungspseudeocode für die Blackbox:

// Wenn die erste Zahl größer ist als die zweite Zahl,
//        gib mir die erste Zahl.
// Andernfalls
//        gib mir die zweite Zahl.
