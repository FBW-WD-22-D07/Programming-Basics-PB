// Mit Parametern (auch Funktionsargumente genannt) können wir beliebige Daten an Funktionen übergeben.
// Parameter an eine Funktion verhalten sich wie normale Verknüpfungen,
// aber ihre Anfangswerte werden durch den Aufrufer der Funktion vorgegeben,
// nicht der Code in der Funktion selbst.

// 1.
function square(number) {
    // number ist ein Parameter oder ein Argument
    console.log(number * number);
}

square(5); // 25
square(50); // 2500
square(2); // 4
square(16); // 256

// ---------##---------
// 2.

function showMessage(name, message) {
    console.log(`${name}: ${message}`);
}

showMessage("Anna", "Hello!"); // Anna: Hello!
showMessage("Anna", "Whats up!"); // Anna: Whats up!
showMessage("Fran", "Hi!"); // Fran: Hi!
showMessage(); // undefined: undefined

// ---------##---------
// 3.

// Die Standardwerte der Parameter sind undefined.
function concatnateStrings(string1, string2) {
    let output = `${string1} ${string2}`;
    console.log(output);
}

concatnateStrings("Hello"); // Hello undefined

// ---------##---------
// 4.

function showMessage4(text) {
    if (text === undefined) {
        text = "Empty message!";
    }

    console.log(text);
}

showMessage4(); // Empty message!
showMessage4("Hello world!"); // Hello world!

concatnateStrings("August", 26); // August 26

showMessage4("August", 26); // August
showMessage4(30, 26); // 30
showMessage4(30, "August"); // 30

// ---------##---------
// 5.

function userInfo(firstName, lastName, email, dob) {
    const userObject = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        dob: dob,
    };

    if (userObject.dob === undefined) {
        userObject.dob = "Date of birth not available!";
    }

    console.log(userObject);
}

userInfo("John", "Doe", "john.doe@gmail.com"); // dob not passed!

// {
//     first_name: 'John',
//     last_name: 'Doe',
//     email: 'john.doe@gmail.com',
//     dob: 'Date of birth not available!'
//   }
