//  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//  - va applicato uno sconto del 20% per i minorenni
//  - va applicato uno sconto del 40% per gli over 65.
//  - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
//            per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//  Chiedo all'utente il numero di chilometri
const chilometri = Number(prompt("Salve indicare il quantitativo di chilometri previsti dal suo viaggio"))
// chiedo all'utente l'età del passeggero
const età = Number(prompt("Inserire l'età del passeggero"))
//  Verifico il prezzo del biglietto
//      -prezzo varia in base ai chilometri(motiplico il numero dei chilometri al prezzo/km)
const prezzo = Number( chilometri * 0.21)
//  Verifico eventuali sconti
//      -SE età è inferiore a 18(escluso) allora il prezzo è scontato del 20%
if 
//          oppure
//      -SE età è superiore a 65(incluso) allora il prezzo è scontato del 40%
//      -ALTRIMENTI SE etàcompresa tra 18 (incluso) a 65(escluso) non viene applicato nessuno sconto
//  prezzo finale da mostrare sarà espresso con massimo due decimali.