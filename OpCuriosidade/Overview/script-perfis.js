var uc = document.getElementById('uc');
var cm = document.getElementById('cm');
var cc = document.getElementById('cc');
var ifr = document.getElementById('iframe');

var selectedDiv = uc;

uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';

function ultCad(){
    if (selectedDiv !== uc) {
        resetStyles();
        selectedDiv = uc;
        uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function cadmin(){
    if (selectedDiv !== cm) {
        resetStyles();
        selectedDiv = cm;
        cm.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function comco(){
    if (selectedDiv !== cc) {
        resetStyles();
        selectedDiv = cc;
        cc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function resetStyles() {
    uc.style.backgroundColor = 'white';
    cm.style.backgroundColor = 'white';
    cc.style.backgroundColor = 'white';
}

uc.onmouseover = function() {
    if (selectedDiv !== uc) {
        uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

uc.onmouseout = function() {
    if (selectedDiv !== uc) {
        uc.style.backgroundColor = 'white';
    }
};

cm.onmouseover = function() {
    if (selectedDiv !== cm) {
        cm.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

cm.onmouseout = function() {
    if (selectedDiv !== cm) {
        cm.style.backgroundColor = 'white';
    }
};

cc.onmouseover = function() {
    if (selectedDiv !== cc) {
        cc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

cc.onmouseout = function() {
    if (selectedDiv !== cc) {
        cc.style.backgroundColor = 'white';
    }
};

function selecionaPagina(){
    if(selectedDiv === uc){
        ifr.src = "../Last-Shared/perfis-ult.html";
    }else if(selectedDiv === cm){
        ifr.src = "../Shared-By-Me/perfis-cm.html";
    }else if(selectedDiv === cc){
        ifr.src = "../Shared-With-Me/perfis-cc.html";
    }
}


window.addEventListener('message', function(event) {
    window.parent.postMessage(event.data, '*');
});

window.addEventListener('message', function(event) {
    console.log('Mensagem recebida:', event.data);

    if (event.data === 'trocaTela') {
        console.log('Mensagem "trocaTela" recebida, alterando seleção para cc.');
        comco();
    }
});