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

for (let i = 0; i < colori.length; i++) {
    const colNum = colori[i]
    console.log(colNum);
    if (colNum === "rosso") {
        numVolte++

    }
    
}

console.log(`La soluzione dell'esercizio 2 è ${numVolte}`)


// ESERCIZIO N 3

const input = [1, 2, 3, 4];
console.log(input)

const inputRev = []

for (let i = input.length - 1; i >= 0; i--) {
    const numRev = input[i]
    inputRev.push(numRev)
    // console.log(inputRev)

}
console.log(inputRev)
console.log(`La soluzione dell'esercizio 3 è ${inputRev}`)


// ESERCIZIO N 4

const numeriN4 = [45, 2, 89, 3, 22]

