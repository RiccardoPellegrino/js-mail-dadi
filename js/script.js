
const emailCorrette = ["spiderman@gmail.com", "batman@gmail.com", "hulk@gmail.com", "pellegrino@gmail.com", "ironman@gmail.com"];

let messaggio = document.querySelector('.messaggio');
let email = document.querySelector('.email');
let btn = document.getElementById("login");

btn.addEventListener("click", function () {

    let emailUtente = document.getElementById("mail").value;

    for (i = 0; i < emailCorrette.length; i++) {
        console.log(emailUtente);

        if (emailUtente == emailCorrette[i]) {
            messaggio.innerHTML = "Loggato";

            break;
        }
        else {
            messaggio.innerHTML = "Email non valida - Inserisci un email valida";
            
        }
    }

})

