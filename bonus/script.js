console.log("ciao")

// ESERCIZIO N 1

const numeri = [2, 5, 8, 3, 10, 7];
console.log(numeri)

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    const num = numeri[i];
    console.log(num);
    if (num % 2 === 0) {
        somma = somma + num
        
    }
}

console.log(`La soluzione dell'esercizio 1 è ${somma}`)


// ESERCIZIO N 2

const colori = ["rosso", "blu", "rosso", "verde", "rosso"];

console.log(colori)

let numVolte = 0;

for (i = 0; i < colori.length; i++) {
    const colNum = colori[i]
    console.log(colNum);
    if (colNum === "rosso") {
        numVolte++

    }
    
}

console.log(`La soluzione dell'esercizio 2 è ${numVolte}`)
