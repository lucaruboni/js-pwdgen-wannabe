alert("ciao");

// Chiedi all'utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23

/* NOME */


const userName = prompt("come ti chiami?");
console.log(userName);


/* COGNOME */

const userSurname = prompt("Qual è il tuo cognome?");
console.log(userSurname);

/* COLORE */

const userFavColor = prompt("Qual è il tuo colore preferito?");
console.log(userFavColor);

/* element presentation */

const presentationElement = document.getElementById("presentation");
console.log(presentationElement)


/* inner html */

presentationElement.innerHTML=`${userName}${userSurname}${userFavColor}23`
