# DADI

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## DATI
1. Dado giocatore
2. Dado CPU

## ESECUZIONE LOGICA

1. Giocatore lancia 1d6
2. CPU lancia 1d6

3. PER ogni ROUND (decidere quanti)
    SE risultato giocatore maggiore della CPU
        ALLORA Giocatore vince
    ALTRIMENTI SE risultato giocatore minore della CPU
        ALLORA Giocatore perde
    ALTRIMENTI se entrambi i risultati sono uguali
        ALLORA Pareggio
