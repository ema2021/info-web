monfirefox = navigator.userAgent.indexOf('Firefox');
// Car les popup in firefox sont ennuyantes
function requiredElement(myid, spanid) {
    x = document.getElementById(myid);
    if (x.value == "") {
        x.style.border = '0.5px solid red';
            document.getElementById(spanid).innerHTML = x.name + " ne doit pas etre vide";
            return false;
    }
    else {
        document.getElementById(spanid).innerHTML = " ";
        x.style.border = 'none';
        return true;
    }
    return true;
}

function calculMoyen(myid) {
    n1 = document.getElementById('m1').value;
    n2 = document.getElementById('m2').value;
    n3 = document.getElementById('m3').value;
    s = n1 + n2 + n3;
    document.getElementById("demo").innerHTML = s;

}
function note1Validate(inputID, spanid) {
    y = document.getElementById(inputID);
    if (isNaN(y.value) || y.value == "" || y.value < 0 || y.value > 20) {
        y.style.background = 'red';
        if (monfirefox != -1) {
            document.getElementById(spanid).innerHTML = "La note " + y.name + " doit etre entre 0 et 20";
        }
        else {
            alert("La note " + y.name + " doit etre entre 0 et 20");
        }
        if (y.value == '') {
            document.getElementById(spanid).innerHTML = "";
            y.style.background = 'none';
        }
        return false;
    }
    else {
        document.getElementById(spanid).innerHTML = "";
        y.style.background = 'none';
        return true;
    }
    return true;
}
function calculMoyen(myid, spanid) {
    n1 = document.getElementById('m1').value;
    n2 = document.getElementById('m2').value;
    n3 = document.getElementById('m3').value;
    if (note1Validate(myid, spanid)) {


        if (n1 == '') {
            n1 = 0;
        } if (n2 == '') {
            n2 = 0;
        } if (n3 == '') {
            n3 = 0;
        }
        s = (n1 * 1 + n2 * 1 + n3 * 1) / 3;
        if (s >= 10) {
            document.getElementById("demo").innerHTML = "Valider";
            document.getElementById('demo').style.color = 'green';

        } else {
            document.getElementById("demo").innerHTML = "non Valider";
            document.getElementById('demo').style.color = 'red';

        }
        return true;
    }
    else {
        document.getElementById("demo").innerHTML = "";
        return false;
    }

}
function validateEmail(email, spanid) {
    x = document.getElementById(email);
    var re = /\S+@\S+\.\S+/;
    if (!re.test(x.value) && x.value != '') {
        // x.style.border = '1px solid red';
        document.getElementById(spanid).innerHTML = "Cet email est invalide";
        return false;
    }
    else {
        document.getElementById(spanid).innerHTML = "";
        x.style.border = 'none';
        // x.style.background = 'wh';
        return true;
    }

}

function validateName(myid, spanid) {
    var re = /^[a-zA-Z]+$/;
    x = document.getElementById(myid);
    if (!re.test(x.value) && x.value != "" && requiredElement(myid, spanid)) {
        document.getElementById(spanid).innerHTML = "Le " + myid.name + " ne doit pas etre vide ou contenir des nombres";
        x.style.border = '0.5px solid red';
        return false;

    }
    else {
        document.getElementById(spanid).innerHTML ='';
        x.style.background = 'none';
        return true;

    }
    return true;

}
function validateForm() {
    if (note1Validate('m1', 'm1_mess') && note1Validate('m2', 'm2_mess') && note1Validate('m3', 'm3_mess') && validateEmail('email', 'email_mess') && validateName('name', 'name_mess') && validateName('surname', 'surname_mess')) {
        document.getElementById('message').innerHTML = "Tous les champs sont valides";
        document.getElementById('message').style.color = 'green';
        alert("Everything is goodToutes les données sont validées ! Voulez-vous les envoyer au serveur? ")
        return true;

    }
    return false;
}
function Retour() {
    window.history.back();
}