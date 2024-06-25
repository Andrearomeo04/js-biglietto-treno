Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Ricordatevi di fare il file README.md in cui scomponete il problema in sotto problemi
Numero minimo di push: 6
Buon pranzo a dopo.

soluzione 


problema 1 "Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere"
1.dichiaro una variabile per i numeri di km da voler percorrere
2.assegno a questa variabile, il valore recuperato tramite un primo prompt

problema 2 "Il programma dovrà chiedere all'utente l'età del passeggero"
1.dichiaro una variabile per l'età del passeggero
2.assegno a questa variabile, il valore recuperato tramite un primo prompt

problema 3 "il prezzo del biglietto è definito in base ai km (0.21 € al km)"
1.richiamo la variabile per i numeri di km da voler percorrere e applico un calcolo in % per ottenere il prezzo finale

problema 4 "va applicato uno sconto del 20% per i minorenni; va applicato uno sconto del 40% per gli over 65."
1.richiamo la variabile per l'età del passeggero
2.se il passeggero ha meno di 18 anni
2.1applico uno sconto in % del 20% sul prezzo
3.altrimenti se il passeggero ha 65 o più anni
3.1applico uno sconto in % del 40% sul prezzo
4.altrimenti il prezzo è quello default

problema 5 "L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)"
1.vado ad assegnare alla variabile con il prezzo, una proprietà che ci permette di ottenere il risultato in due decimali