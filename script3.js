document.getElementById("openform").onclick=function()
{
    document.getElementById("modal").style.display="block";
};
document.getElementById("close").onclick=function(){
    document.getElementById("modal").style.display="none";
};

document.getElementById("adoptform").addEventListener("submit",
 function(e) {
    let nume= document.getElementById("nume").value;
    let prenume=document.getElementById("prenume").value;
    let telefon=document.getElementById("telefon").value;
    let email=document.getElementById("email").value;
    let motiv=document.getElementById("motiv").value;
    

    if (nume === "" || /\d/.test(nume)) {
        alert("Vă rugăm să vă introduceți numele!");
        e.preventDefault();
        return;
    }

    if (prenume ===" " || /\d/.test(prenume))
    {
        alert("Va rugam sa va introduceti prenumele!");
        e.preventDefault();
        return;
    }

    if(telefon==="" || !/\d{10}$/.test(telefon))
    {
        alert("Va rugam sa va introduceti numarul de telefon!");
        e.preventDefault();
        return;
    }

    if(email==="")
    {
        alert("Va rugam sa va introduceti email-ul!");
        e.preventDefault();
        return;
    }
     if(motiv==="")
    {
        alert("Va rugam sa nu lasati niciun camp gol!");
        e.preventDefault();
        return;
    }

});



document.getElementById("openDonatie").onclick = function() {
    document.getElementById("modalDonatii").style.display = "block";
};

document.getElementById("closeDonatie").onclick = function() {
    document.getElementById("modalDonatii").style.display = "none";
};


function setSuma(valoare, element) {
    document.getElementById('suma_finala').value = valoare;
    let butoane = document.querySelectorAll('.btn-suma');
    butoane.forEach(b => b.classList.remove('activ'));
    element.classList.add('activ');
}

document.getElementById("donatieform").addEventListener("submit", function(e) {
    e.preventDefault();
    let suma = document.getElementById("suma_finala").value;
    let card = document.getElementById("nr_card").value;

    if(card.length < 16 || isNaN(card)) {
        alert("Numărul de card trebuie să aibă 16 cifre!");
        return;
    }

    alert("Vă mulțumim! Donația de " + suma + " RON pentru Alba a fost înregistrată cu succes.");
    document.getElementById("modalDonatii").style.display = "none";
    this.reset();
});


document.getElementById("voluntariatform").addEventListener("submit",
 function(e) {
    let nume= document.getElementById("nume").value;
    let prenume=document.getElementById("prenume").value;
    let telefon=document.getElementById("telefon").value;
    let email=document.getElementById("email").value;
    let motiv=document.getElementById("motiv").value;
    

    if (nume === "" || /\d/.test(nume)) {
        alert("Vă rugăm să vă introduceți numele!");
        e.preventDefault();
        return;
    }

    if (prenume ===" " || /\d/.test(prenume))
    {
        alert("Va rugam sa va introduceti prenumele!");
        e.preventDefault();
        return;
    }

    if(telefon==="" || !/\d{10}$/.test(telefon))
    {
        alert("Va rugam sa va introduceti numarul de telefon!");
        e.preventDefault();
        return;
    }

    if(email==="")
    {
        alert("Va rugam sa va introduceti email-ul!");
        e.preventDefault();
        return;
    }
     if(motiv==="")
    {
        alert("Va rugam sa nu lasati niciun camp gol!");
        e.preventDefault();
        return;
    }

});
