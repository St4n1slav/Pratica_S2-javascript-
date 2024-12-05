/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1*l2
}
let abc = area(2, 4)
console.log(abc);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(i1, i2) {
    if (i1===i2) {
       return (i1+i2)*3
    }   
    return i1+i2
}
let bcd = crazySum(4, 4);
console.log(bcd);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(d1) {
    if (d1>19) {
        return Math.abs(d1-19)*3
    }
    return Math.abs(d1-19);
}
let differenza = crazyDiff(21)
console.log(differenza);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro,
  e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n1) {
    if ((n1>=20 && n1<=100) || n1===400) {
        return true;
    }
    return false;
}
console.log(boundary(232));


//Magia nera suggerita

/* function boundary(n1) {
    let cond = ((n1>=20 && n1<=100) || n1===400)
    return cond;
}
console.log(boundary(400));
 */


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/**
 * 
 * @param {string} s1 
 */
 
function epify(s1) {
    if (s1.startsWith("EPICODE")) {
        return s1;
    }
    return "EPICODE" + " " + s1
}
let gooog = epify("Ciao Mario Rossi!")
console.log(gooog);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
  La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function check3and7(np) {
    if (((np%3)===0) || ((np%7)===0)) {
        return true
    }
    return false
}
console.log(check3and7(21)); */


function check3and7(np){
    let cond1 = (((np%3)===0) || ((np%7)===0))
    return cond1
}
console.log(check3and7(14));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/**
 * 
 * @param {string} st1 
 */
function reverseString(st1) {
    return st1.split("").reverse().join("");
}
let st1 = "Grazie mille LoZimmero";
console.log(reverseString(st1));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/**
 * 
 * @param {string} st2 
 */
function upperFirst(st2) {
    let parole = st2.split(" ")
    for (i=0; i<parole.length; i++){
        let parola = parole[i]
        let capital = parola.charAt(0).toUpperCase()
        parole[i]=capital+parola.substring(1,parola.length)
    }
    return parole.join(" ")
}
console.log(upperFirst("ciao mario rossi"));



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
  La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/**
 * 
 * @param {string} st3 
 */
function cutString(st3) {
    return st3.substring(1,st3.length-1)
}
console.log(cutString("Ciao aaaa Ciao"));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom",
  che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function giveMeRandom(n) {
    let nArr = [];
    for(i=0; i<n; i++){
        let random = Math.round(Math.random()*10)
        nArr.push(random)
    }
    return nArr
}
console.log(giveMeRandom(4));

