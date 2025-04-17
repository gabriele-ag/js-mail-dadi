const mailUtente = prompt("Scrivi la tua e-mail");
console.log(mailUtente);

const listaMail = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com", "utente4@gmail.com", "utente5@gmail.com", "utente6@gmail.com"];

let accesso = false;

for (let i = 0; i < listaMail.length && mailUtente === listaMail; i++) {
    accesso = true;
  
}

console.log(accesso)

