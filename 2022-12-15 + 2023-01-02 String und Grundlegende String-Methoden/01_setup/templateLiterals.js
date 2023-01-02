let myName = "mariam";

const city = "Berlin";

const guestList = "Guests:\n -John\n -Peter\n -Ben";
console.log(guestList);

console.log("Meine Gästeliste lautet:" + " " + guestList);

/**
 * Guests:
 * -John
 * -Peter
 * -Ben
 */

// ES6 - 2015

const country = `Deutschland`;

const mulitLineString = `Guests:
-John
-Peter
-Den`;
console.log(mulitLineString);

console.log(`Meine Gästeliste lautet: ${mulitLineString}`);

const user = "Dave";
console.log(`Der Benutzer ist ${user}`);

const price = 20;
const tax = 1.05;

const total = `Der Gesamtpreis inkl. Steuern beträg ${price * tax}€.`;
console.log(total);
