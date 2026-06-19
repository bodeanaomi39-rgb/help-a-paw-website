document.getElementById("formular").addEventListener("submit",
 function(e) {
    let nume= document.getElementById("nume").value;
    let prenume=document.getElementById("prenume").value;
    let telefon=document.getElementById("telefon").value;
    let email=document.getElementById("email").value;
    let mesaj=document.getElementById("mesaj").value;

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


    if(mesaj==="")
    {
        alert("Va rugam sa introduceti mesajul!");
        e.preventDefault();

    }
});




