// Es gibt eine weitere Syntax zur Erstellung einer Funktion, die als Funktionsausdruck bezeichnet wird.
// Die Funktion wird explizit erstellt und der Variablen zugewiesen, wie jeder andere Wert auch.
// Unabhängig davon, wie die Funktion definiert ist, handelt es sich lediglich um einen Wert, der in der Variablen sayHi gespeichert ist.
// In JavaScript ist eine Funktion ein Wert, also können wir sie wie einen Wert behandeln.

// Funktionsausdrücke haben ein Semikolon ; am Ende, Funktionsdeklarationen jedoch nicht.
// Ein Funktionsausdruck wird innerhalb der Anweisung: let sayHi = ...;, als Wert verwendet. Es ist kein Code-Block.
// Das Semikolon ; wird am Ende von Anweisungen empfohlen, unabhängig vom Wert.
// Die Semikolons stehen also in keinem Zusammenhang mit den Funktionsausdrücken, sie beenden lediglich die Anweisungen.

// Eine Funktion ist ein Wert, der eine "Action" darstellt.
// Normale Werte wie Zeichenketten oder Zahlen stellen die Daten dar.
// Eine Funktion kann als eine Aktion aufgefasst werden.
// Wir können sie zwischen Variablen übergeben und ausführen, wann wir wollen.

// ---------##---------

// functiondeclaration vs. functionexpression

// functionexpression
// Eine functionexpression wird erstellt, wenn die Ausführung ihn erreicht und ist von da an verwendbar.
// Sobald der Ausführungsfluss die rechte Seite der Zuweisung let sum = function... erreicht, wird die Funktion erstellt und kann von nun an verwendet werden (zugewiesen, aufgerufen, etc.).
// functionexpressions werden erstellt, wenn die Ausführung sie erreicht.

// functiondeclaration
// Eine functiondeclaration ist im gesamten Skript/Codeblock verwendbar.
// Wenn JavaScript die Ausführung des Skripts oder eines Codeblocks vorbereitet, sucht es zunächst nach functiondeclaration und erstellt die Funktionen. Man kann sich das als eine "Initialisierungsphase" vorstellen.
// Nachdem alle functiondeclaration verarbeitet wurden, wird die Ausführung fortgesetzt.
// Eine Funktion, die als functiondeclaration deklariert ist, kann schon früher aufgerufen werden, als sie definiert ist.
// Wenn eine functiondeclaration innerhalb eines Codeblocks gemacht wird, ist sie überall innerhalb dieses Blocks sichtbar. Aber nicht außerhalb des Blocks.

// Wann sollten Sie sich für eine functiondeclaration und wann für einen functionexpression entscheiden?
// Betrachte zunächst die Syntax der functiondeclaration. Sie gibt uns mehr Freiheit bei der Gestaltung unseres Codes, da wir solche Funktionen aufrufen können, bevor sie deklariert werden.
// functiondeclaration sind  mehr “eye-catching”.
