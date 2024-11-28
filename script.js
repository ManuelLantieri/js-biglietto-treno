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
const prezzo = Number(0.21 * chilometri)
//  Verifico eventuali sconti
//  sconto del 20%
const scontoMinorenni = ((prezzo / 100) * 20 )
const prezzoMinorenni = Number(prezzo - scontoMinorenni)
//  sconto del 40%
const scontoAnziani = ((prezzo / 100) * 40 )
const prezzoAnziani = Number(prezzo - scontoAnziani)
// SE età inferiore a 18(escluso) allora il prezzo sarà scontato del 20%
if (età > 0 && età < 18) {
    alert(`grazie allo sconto del 20% per minorenni il prezzo del suo biglietto è di: ${prezzoMinorenni.toFixed(2)}€`)
} else if (età >= 65 && età < 100) {
    alert(`grazie allo sconto del 40% per anziani il prezzo del suo biglietto è di: ${prezzoAnziani.toFixed(2)}€`)
} else {
    alert(prezzo)
}
//      -ALTRIMENTI SE etàcompresa tra 18 (incluso) a 65(escluso) non viene applicato nessuno sconto
//  prezzo finale da mostrare sarà espresso con massimo due decimali.