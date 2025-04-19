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


// ESERCIZIO N 4 (DA FARE)

const numeriN4 = [45, 2, 89, 3, 22]

for (let i = 0; i < numeriN4.length; i++) {
    const numN4 = numeriN4[i]
    console.log(numN4)
}



// ESERCIZIO N 5

const arr = [10, 20, 30, 40, 50, 60];
console.log(arr)

let sommaArr = 0;

for (let i = 0; i < arr.length; i++) {
    const numerazzo = arr[i];
    console.log(numerazzo);
    if (i % 2 !== 0) {
        sommaArr = sommaArr + numerazzo;

    }

}

console.log(sommaArr);

// ESERCIZIO N 6

