const mailUtente = prompt("Scrivi la tua e-mail");
// console.log(mailUtente);

const listaMail = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com", "utente4@gmail.com", "utente5@gmail.com", "utente6@gmail.com"];

// let accesso = false;

for (let i = 0; i < listaMail.length; i++) {
    const mail = listaMail[i]
    console.log(mail)
    if (mailUtente === mail) {
        console.log("Accesso Effettuato");
        break;
    } else {
        console.log("Accesso Fallito");
    }
}

