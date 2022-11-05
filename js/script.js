// task 1: creare una funzione che genera i 5 numeri casuali e li scrive in pagina, e salvarli su una variabile/array. Dopo di che chiamare task 2.


// task 2 generare una funzione che genera un timer di 30 secondi. Dopo di che chiamare task 3.


//task 3 creare una funzione che faccia scomparire i num in pagina, e che apra il prompt invitando l'utente a scriverli. 


// task 4 creare una funzione che alla chiusura del prompt recuperi i numeri inseiti, li confronti con i numeri iniziali e dia un response all'utente.


let container = document.getElementById("container");
let randomNumber = [];
let j;
let win;
let correctCount;


function ask(){
    
    win = true;
    
    correctCount = 0;

    for (let i = 1; i <= randomNumber.length; i++) {
        
        j = prompt("Inserisci il " + i + "° numero: ");

        if (randomNumber.includes(j))
        {
            console.log("Il numero " + j + " è corretto.");
            correctCount += 1;
        }
        else
        {
            console.log("il numero " + j + " è errato.")
            win = false;
        }
    };

    if (win)
    {
        console.log("Complimenti hai indovinato tutti i numeri, hai vinto!");
    }
    else
    {
        console.log("Hai totalizzato " + correctCount + " punti.")
    };
};




while (randomNumber.length < 5) { 

    let randN = Math.floor(Math.random() * 100).toString(); 

    if (!randomNumber.includes(randN))
    {
        randomNumber.push(randN);
        container.innerHTML += randN + " ";
    };
};




setTimeout(function() { hide(); setTimeout(ask,1000);}, 30000 );

function hide() {

    container.innerHTML = "";

};



