let user = document.getElementById("user");

let pc = document.getElementById("pc");

let start = document.getElementById('startGame')

start.addEventListener('click', function () {

    let pcGame = Math.ceil(Math.random() * 6);

    let userGame = Math.ceil(Math.random() * 6);

    let risultato = document.getElementById('esito')

    console.log(risultato);

    console.log('Il pc ha '+ pcGame);

    console.log('Tu hai '+ userGame);

    if (userGame > pcGame) {
        risultato.innerHTML = 'Complimenti Hai vinto!!!';
        console.log(risultato);

    } else if (userGame < pcGame) {
        risultato.innerHTML = 'Hai perso Andrà meglio la prossima volta';
        console.log(risultato);

    } else {
        risultato.innerHTML = 'Pareggio';
        console.log(risultato);
    }
});