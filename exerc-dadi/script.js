for (let i = 0; i < 100; i++) {
    const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
    const dadoCPU = Math.floor(Math.random() * 6) + 1;
    if (dadoGiocatore > dadoCPU) {
        console.log(`Round ${i + 1}: Giocatore vince perchè ${dadoGiocatore} è maggiore di ${dadoCPU}`);
    } else if (dadoGiocatore < dadoCPU) {
        console.log(`Round ${i + 1}: Giocatore perde perchè ${dadoGiocatore} è minore di ${dadoCPU}`);
    } else {
        console.log(`Round ${i + 1}: Pareggio`)
    }
}


// Ho constatato che definendo le variabili al di fuori del ciclo, con questa impostazione, ogni round non stamperà risultati diversi

// const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
// const dadoCPU = Math.floor(Math.random() * 6) + 1;

// for (let i = 0; i < 100; i++) {
//     if (dadoGiocatore > dadoCPU) {
//         console.log(`Round ${i + 1}: Giocatore vince perchè ${dadoGiocatore} è maggiore di ${dadoCPU}`);
//     } else if (dadoGiocatore < dadoCPU) {
//         console.log(`Round ${i + 1}: Giocatore perde perchè ${dadoGiocatore} è minore di ${dadoCPU}`);
//     } else {
//         console.log(`Round ${i + 1}: Pareggio`)
//     }
// }
