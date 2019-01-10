/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ar_nomi = [];
var ar_valori = [];
var tot_don = 0;
var num_don = 0;


function addDonazione() {
    //carico gli array
    ar_nomi.push(document.getElementById("in_nome").value);
    ar_valori.push(document.getElementById("in_valore").value);
    prep_output();


}

function modifica() {
    var modif = document.getElementById("in_modif").value - 1;
    ar_nomi[modif] = document.getElementById("in_nome").value;
    ar_valori[modif] = document.getElementById("in_valore").value;
    prep_output();


}

function cancella() {
    var elem = document.getElementById("in_elem").value - 1;
    ar_nomi.splice(elem, 1);
    ar_valori.splice(elem, 1);
    prep_output();
}


function prep_output() {
    let text = "";
    let totale = 0;
    for (i = 0; i < ar_nomi.length; i++) {

        text += "<span in='don" + 1 + "'> #" + (i + 1) + " " + ar_nomi[i] + " ha donato: $ " + ar_valori[i] + "</span><br>";
        totale += ar_valori[i] * 1;

    }


    document.getElementById("div_donazioni").innerHTML = text;
    tot_don = totale;
    num_don = ar_nomi.length;
    document.getElementById("numeroDon").innerHTML = num_don;
    document.getElementById("totale").innerHTML = totale;
    document.getElementById("in_modif").max = ar_nomi.length;
    document.getElementById("in_modif").min = 1;


}

function undoDonazione() {
    ar_nomi.pop();
    ar_valori.pop();
    prep_output();


}

function cerca() {
    let nome_ricerca = document.getElementById("in_nomeRicerca").value;

    let i = 0;
    let continua = true;

    while (continua === true) {
        nome_corrente = ar_nomi[i];
        if (nome_ricerca === nome_corrente) {
            ////trovatooooo
            continua = false;
            document.getElementById("div_valoreRicerca").innerHTML = ar_valori[i];

        } else {
            ///vado al prossimo
            i++;
        }
        // verifico che non ce ne siano più
        if (i >= ar_nomi.length) {
            //continua = true;
            continua = false;
            document.getElementById("div_valoreRicerca").innerHTML = "Nominativo non trovato!";

        }

    }

}



