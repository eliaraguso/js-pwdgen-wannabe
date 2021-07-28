// Chiedi all' utente il suo nome
var nomeUtente = prompt("Inserisci il tuo nome");

// Chiedi all' utente il suo cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");

// Chiedi all' utente il suo colore preferito
var colorePreferito = prompt("Inserisci il tuo colore preferito");

// Chiedi all'utente il numero della sua classe
var numeroClasse = parseInt(prompt("Inserisci il numero della tua classe"));

// Genera la password con struttura "nomecognomecolorepreferito40"
var password = nomeUtente + cognomeUtente + colorePreferito + numeroClasse;

// Scrivi sulla pagina la password
document.getElementById('JS').innerHTML += password;