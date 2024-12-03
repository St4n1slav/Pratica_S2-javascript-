/* alert("Tutte le risposte sono commentate."); */
/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let x = 10
let y = 20
if(x>y) {
   console.log("x è maggiore di y")
} else {
    console.log("x è minore di y");
}  */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let a = 11
if(a!=5){
  console.log("a è diverso da 5"); 
} else {
  console.log("a è uguale a 5");
}
 */
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let b = 25
if(b%5===0){
  console.log("b è divisibile per 5");
} else{
  console.log("b non è divisibile per 5");
}
 */
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let c = 8
let d = 1
if(c===8){
  console.log("c è uguale a 8");
} else if (c-d===8) {
  console.log("La differenza tra c e d è uguale a 8");
} else if (d-c===8) {
  console.log("La differenza tra d e c è uguale a 8");
} else if (c+d===8) {
  console.log("La somma tra c e d è uguale a 8");
} else {
  console.log("Ne c, ne la somma tra i due valori ne la loro differenza non è 8");
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart = 51
if(totalShoppingCart>50){
  console.log("C'è una promozione in corso: se il totale del carrello supera 50");
} else {console.log("la spedizione ha un costo fisso pari a 10");
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart = 80
console.log("Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.");
let promotion = totalShoppingCart * 0.2;
let totalShoppingCartBlackFriday = totalShoppingCart - promotion;
if(totalShoppingCartBlackFriday>50){
  console.log("C'è una promozione in corso: se il totale del carrello supera 50");
} else {console.log("la spedizione ha un costo fisso pari a 10");
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const numeri = [9, 2, 5, 3]
numeri.sort();
console.log(numeri); */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const x = 5
console.log(x, typeof x);
const myArr = [23, 4, 5]
console.log(myArr, typeof myArr); */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let x = 3
if(x%2===0){
  console.log("x è un numero pari");
} else{
  console.log("x è un numero dispari");
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let val = 12
  if (val < 10 && val>= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* me.city = "Toronto";
console.log(me); */


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* delete me.lastName;
console.log(me); */


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* delete me.skills.pop();
console.log(me); */


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const newArr = []
newArr.push(1);
newArr.push(2);
newArr.push(3);
newArr.push(4);
newArr.push(5);
newArr.push(6);
newArr.push(7);
newArr.push(8);
newArr.push(9);
newArr.push(10); */
/* console.log(newArr); */



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* newArr.pop();
newArr.push(100);
console.log(newArr); */
