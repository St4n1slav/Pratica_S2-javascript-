/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

console.log("Hello World!");


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("I datatype principali di javascript sono:");
console.log("String: può indicare sia un singolo carattere sia una seguenza di caratteri, (come ad esempio questo testo), può anche essere un valore numerico che pero verrà interpretata dal calcolatore come un carattere, anzichè valore numerico;");
console.log("Numerico: un valore numerico, che può essere sia intero (1, 2, 3...), sia decimale, indicato con  il punto <.>, ad esempio (3,14);");
console.log("Booleano: un dato che ammette solo due valori (True o False), quindi o è vero(1), o è falso(0);");
console.log("Undefined: un valore vuoto o non specificato (vuoto), dunque un valore che non riporta nulla;");
console.log("Null: Simile all'undefined, ma che è vuota, (cancellata), intenzionalmente.");

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Stanislav Yaroshenko"
/*  var myName = "Stanislav Yaroshenko" */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Yaroshenko"

const sesso = "M"
/* sesso = "F" */
/* La riga di sopra da errore perchè la variante "const" non può essere riassegnata.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(x-4);
console.log(4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
/* console.log("name1" !== "name2");*/
let result = name2.toLowerCase();
console.log(name1 === result);