
var socket = io();

socket.on('turing/thermo/mesure', function(msg) {
    var elemValeur = document.getElementById('alphavalue');
    var elemBar = document.getElementById('alphabar');

    if(msg > 25){
        elemValeur.setAttribute("class","text-danger");
        elemBar.setAttribute("class","progress-bar bg-danger")
    }
    else{
        elemValeur.setAttribute("class","text-success");
        elemBar.setAttribute("class","progress-bar bg-success")
    }

    elemValeur.textContent = msg;
    elemBar.setAttribute("style","width: "+msg+"%;");
});

socket.on('turing/thermo/moyenne', function(msg) {
    var elemValeur = document.getElementById('betavalue');
    var elemBar = document.getElementById('betabar');

    if(msg > 25){
        elemValeur.setAttribute("class","text-danger");
        elemBar.setAttribute("class","progress-bar bg-danger")
    }
    else{
        elemValeur.setAttribute("class","text-success");
        elemBar.setAttribute("class","progress-bar bg-success")
    }
    elemValeur.textContent = msg;
    elemBar.setAttribute("style","width: "+msg+"%;");
});

socket.on('turing/porte/etat', function(msg) {
    var elemValeur = document.getElementById('gammavalue');

    if(msg == 0){

        elemValeur.textContent = "Fermée";
        elemValeur.setAttribute("class","btn btn-success disabled");
    }
    else{
        elemValeur.textContent = "ouverte";
        elemValeur.setAttribute("class","btn btn-danger disabled");
    }

});


socket.on('torvalds/thermo/mesure', function(msg) {
    var elemValeur = document.getElementById('deltavalue');
    var elemBar = document.getElementById('deltabar');

    if(msg > 25){
        elemValeur.setAttribute("class","text-danger");
        elemBar.setAttribute("class","progress-bar bg-danger")
    }
    else{
        elemValeur.setAttribute("class","text-success");
        elemBar.setAttribute("class","progress-bar bg-success")
    }
    elemValeur.textContent = msg;
    elemBar.setAttribute("style","width: "+msg+"%;");
});

socket.on('torvalds/thermo/moyenne', function(msg) {
    var elemValeur = document.getElementById('epsilonvalue');
    var elemBar = document.getElementById('epsilonbar');

    if(msg > 25){
        elemValeur.setAttribute("class","text-danger");
        elemBar.setAttribute("class","progress-bar bg-danger")
    }
    else{
        elemValeur.setAttribute("class","text-success");
        elemBar.setAttribute("class","progress-bar bg-success")
    }
    elemValeur.textContent = msg;
    elemBar.setAttribute("style","width: "+msg+"%;");
});

socket.on('torvalds/porte/etat', function(msg) {
    var elemValeur = document.getElementById('zetavalue');

    if(msg == 0){

        elemValeur.textContent = "Fermée";
        elemValeur.setAttribute("class","btn btn-success disabled");
    }
    else{
        elemValeur.textContent = "ouverte";
        elemValeur.setAttribute("class","btn btn-danger disabled");
    }
});

